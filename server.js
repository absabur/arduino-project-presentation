const express = require("express");
const { SerialPort } = require("serialport");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
    credentials: true,
  })
);

// Set up the serial connection to Arduino
const arduinoPort = new SerialPort({
  path: "COM3", // Change to your Arduino's port, e.g., 'COM3' or '/dev/ttyUSB0'
  baudRate: 9600,
});

// Buffer to store incoming data from Arduino
let buffer = "";
let arduinoData = {
  distance: null,
  angle: null,
  parkingStatus: null,
  slotsLeft: null,
  gateStatus: null,
  status: null,
};

// Listen for data from Arduino
arduinoPort.on("data", (data) => {
  // Append the incoming data to the buffer
  buffer += data.toString();

  // Process the buffer line by line (split by '\n')
  let lines = buffer.split("\n");

  // The last line might not be fully complete, so we save it for the next data chunk
  buffer = lines.pop(); // Store incomplete line back in the buffer

  // Process each line
  lines.forEach((line) => {
    try {
      // Trim any extra spaces or newlines
      const trimmedLine = line.trim();

      // Parse the data assuming Arduino sends JSON
      if (trimmedLine) {
        const parsedData = JSON.parse(trimmedLine);

        // Update the object based on received data
        if ("distance" in parsedData)
          arduinoData.distance = parsedData.distance;
        if ("angle" in parsedData) arduinoData.angle = parsedData.angle;
        if ("parkingStatus" in parsedData)
          arduinoData.parkingStatus = parsedData.parkingStatus;
        if ("slotsLeft" in parsedData)
          arduinoData.slotsLeft = parsedData.slotsLeft;
        if ("gateStatus" in parsedData)
          arduinoData.gateStatus = parsedData.gateStatus;
        if ("status" in parsedData) arduinoData.status = parsedData.status;
        if ("carOnGate" in parsedData) arduinoData.carOnGate = parsedData.carOnGate;

        // Optionally log to console for debugging
      }
    } catch (error) {
      console.error("Error parsing Arduino data:", error);
    }
  });
});

// Set up Express to serve static files
app.use(express.static("public"));

// API route to fetch Arduino data
app.get("/data", (req, res) => {
  res.json(arduinoData);
});

app.post("/close", (req, res) => {
  const command = "CLOSE\n"; // Define your single command
  arduinoPort.write(command, (err) => {
    if (err) {
      return res.status(500).send("Error sending command to Arduino");
    }
    res.send("Command sent to Arduino: " + command.trim());
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
