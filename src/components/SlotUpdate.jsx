"use client";

import { useEffect, useState } from "react";
import CloseButton from "./CloseGate";

function SlotUpdate() {
  // State to hold the Arduino data
  const [arduinoData, setArduinoData] = useState({});

  // Function to fetch Arduino data from the server
  const fetchArduinoData = async () => {
    try {
      const response = await fetch("http://localhost:5000/data");
      const data = await response.json();
      setArduinoData(data);
    } catch (error) {
      console.log("Error fetching data:", error);
      setArduinoData("Failed to load data."); // Set error message if fetch fails
    }
  };

  // Use effect hook to fetch data every 1 second
  useEffect(() => {
    const intervalId = setInterval(fetchArduinoData, 100); // Fetch data every 1 second

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleUpdate = async (slot) => {
    if (arduinoData["slotsLeft"] === 0 && arduinoData["totalSlot"] > slot) {
      alert("Cannot update slot. All slots are occupied.");
      return;
    }
    let con = confirm("Are you sure you want to update slot?");
    if (con) {
      try {
        const response = await fetch("http://localhost:5000/update-slot", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ slot: slot }),
        });
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while sending the command.");
      }
    }
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "0 auto",
        textAlign: "center",
        boxShadow: "0 0 5px black",
        padding: "20px",
        borderRadius: "5px",
      }}
    >
      <h2>Update Slot</h2>
      <p>Total slot: {arduinoData["totalSlot"]}</p>
      <p>Slot Left: {arduinoData["slotsLeft"]}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <button
          className="buttons decrease"
          onClick={() => handleUpdate(parseInt(arduinoData["totalSlot"]) - 1)}
        >
          -
        </button>
        <button
          className="buttons increase"
          onClick={() => handleUpdate(parseInt(arduinoData["totalSlot"]) + 1)}
        >
          +
        </button>
      </div>
      {arduinoData["gateStatus"] === "Gate opened" &&
        !arduinoData["carOnGate"] && (
          <div
            style={{
              position: "absolute",
              top: "80px",
              right: "10px",
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: "skyblue",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CloseButton />
          </div>
        )}
    </div>
  );
}

export default SlotUpdate;
