const express = require("express");
const { SerialPort } = require("serialport");
const app = express();
const port = 5000;
const cors = require("cors");
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
    credentials: true,
  })
);

let arduinoPort;
let arduinoData = {
  distance: null,
  angle: null,
  parkingStatus: null,
  totalSlot: null,
  slotsLeft: null,
  gateStatus: null,
  status: null,
  carOnGate: null,
};

// Function to initialize the Serial Port
function initializeSerialPort() {
  arduinoPort = new SerialPort(
    {
      path: "COM3", // Change to your Arduino's port, e.g., 'COM3' or '/dev/ttyUSB0'
      baudRate: 9600,
    },
    (err) => {
      if (err) {
        console.error("Error opening serial port:", err.message);
      } else {
        console.log("Serial port connected");
      }
    }
  );

  // Buffer to store incoming data from Arduino
  let buffer = "";

  arduinoPort.on("data", (data) => {
    buffer += data.toString();
    let lines = buffer.split("\n");
    buffer = lines.pop(); // Store incomplete line back in the buffer
    lines.forEach((line) => {
      try {
        const trimmedLine = line.trim();
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
          if ("totalSlot" in parsedData)
            arduinoData.totalSlot = parsedData.totalSlot;
          if ("gateStatus" in parsedData)
            arduinoData.gateStatus = parsedData.gateStatus;
          if ("status" in parsedData) arduinoData.status = parsedData.status;
          if ("carOnGate" in parsedData)
            arduinoData.carOnGate = parsedData.carOnGate;
        }
      } catch (error) {
        console.error("Error parsing Arduino data:", error);
      }
    });
  });

  arduinoPort.on("close", () => {
    console.log("Serial port closed. Attempting to reconnect...");

    // Use setInterval to try reconnecting at a regular interval
    const reconnectInterval = setInterval(() => {
      // Attempt to initialize the serial port

      // If the serial port opens successfully, clear the interval
      if (arduinoPort.isOpen) {
        console.log("Serial port reconnected.");
        clearInterval(reconnectInterval); // Stop trying to reconnect once successful
      } else {
        initializeSerialPort();
      }
    }, 1000); // Attempt to reconnect every second
  });

  arduinoPort.on("error", (err) => {
    console.error("Serial port error:", err.message);
    // Handle error gracefully without crashing the server
  });
}

// Initialize the Serial Port for the first time
initializeSerialPort();

// Set up Express to serve static files
app.use(express.static("public"));

// API route to fetch Arduino data
app.get("/data", (req, res) => {
  res.json(arduinoData);
});

// API route to send "close" command to Arduino
app.post("/close", (req, res) => {
  const command = "CLOSE\n"; // Define your single command
  if (arduinoPort.isOpen) {
    arduinoPort.write(command, (err) => {
      if (err) {
        return res.status(500).send("Error sending command to Arduino");
      }
      res.send("Command sent to Arduino: " + command.trim());
    });
  } else {
    res.status(500).send("Arduino not connected");
  }
});
app.post("/update-slot", (req, res) => {
  const slot = req.body.slot; // Define your single command
  if (arduinoPort.isOpen) {
    arduinoPort.write(String(slot), (err) => {
      if (err) {
        return res.status(500).send("Error sending command to Arduino");
      }
      res.send("Command sent to Arduino:");
    });
  } else {
    res.status(500).send("Arduino not connected");
  }
});

// API route to reset the Arduino
app.post("/reset", (req, res) => {
  if (arduinoPort.isOpen) {
    arduinoPort.set({ dtr: false }, (err) => {
      if (err) {
        return res.status(500).send("Error toggling DTR: " + err.message);
      }
      setTimeout(() => {
        arduinoPort.set({ dtr: true }, (err) => {
          if (err) {
            return res
              .status(500)
              .send("Error re-enabling DTR: " + err.message);
          }
          res.send("Arduino reset successfully");
        });
      }, 100); // Brief delay before re-enabling DTR
    });
  } else {
    res.status(500).send("Arduino not connected");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
