"use client";
import React, { useState, useEffect } from "react";
import "./style.css";
import TollGate from "./TollGate";
import CloseButton from "./CloseGate";

const ArduinoParkingSystem = () => {
  // State to hold the Arduino data
  const [arduinoData, setArduinoData] = useState({});
  const [slot, setSlot] = useState(0);
  const [distance, setDistance] = useState(0);

  // Function to fetch Arduino data from the server
  const fetchArduinoData = async () => {
    try {
      const response = await fetch("http://localhost:5000/data");
      const data = await response.json();
      setArduinoData(data);
      setSlot(parseFloat(data["slotsLeft"]));
      setDistance(parseFloat(data["distance"]));
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

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: "20px 0",
        position: "relative",
      }}
    >
      <h1>Arduino Parking System</h1>
      <div className="full">
        <div className="slots">
          <h2>Slot Management</h2>
          <div className="slot">
            <div
              className="slot-count"
              style={{
                color:
                  slot === 0
                    ? "red"
                    : slot === 1
                    ? "#FFA700"
                    : slot === 2
                    ? "#53FF00"
                    : slot >= 3
                    ? "green"
                    : "",
                background: `conic-gradient(
                        ${
                          slot === 0
                            ? "red"
                            : slot === 1
                            ? "#FFA700"
                            : slot === 2
                            ? "#53FF00"
                            : slot >= 3
                            ? "green"
                            : ""
                        } 0deg ${slot * (360 / arduinoData["totalSlot"])}deg, 
                        black ${
                          slot * (360 / arduinoData["totalSlot"])
                        }deg 360deg
                      )`,
              }}
            >
              <div
                style={{
                  width: "90%",
                  height: "90%",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {slot}
              </div>
            </div>
            <div className="slot-text">Slot Available</div>
          </div>
          <div className="warning">{arduinoData["parkingStatus"]}</div>
        </div>
        <div className="distance">
          <h2>Distance Management</h2>
          <div className="slot">
            <div
              className="slot-count"
              style={{
                color:
                  distance < 5
                    ? "red"
                    : distance < 10
                    ? "#53FF00"
                    : distance <= 20
                    ? "green"
                    : "",
                background: `conic-gradient(
                        ${
                          distance < 5
                            ? "red"
                            : distance < 10
                            ? "#53FF00"
                            : distance <= 20
                            ? "green"
                            : "gray"
                        } 0deg ${distance * 18}deg, 
                        black ${distance * 18}deg 360deg
                      )`,
              }}
            >
              <div
                style={{
                  width: "90%",
                  height: "90%",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {distance}
              </div>
            </div>
            <div className="slot-text">Distance (cm)</div>
          </div>
          <div className="warning">
            {distance && distance < 5 && <>Be Carefull! Low distance.</>}
          </div>
        </div>
      </div>
      <div className="toll-gate">
        <div style={{ position: "absolute", right: "10px", top: "10px" }}>
          {arduinoData["gateStatus"] === "Gate opened" &&
            !arduinoData["carOnGate"] && <CloseButton />}
        </div>

        <div className="piller piller-l">
          <div className="bim"></div>
        </div>
        <TollGate gateStatus={arduinoData["gateStatus"]} />
        <div className="piller piller-r">
          <div className="bim"></div>
        </div>
      </div>

      <footer
        style={{
          textAlign: "center",
          background: "#f1f1f1",
          padding: "1rem",
          marginTop: "2rem",
          borderTop: "1px solid #ccc",
        }}
      >
        <p>Project by 6-CST-2. Group-A</p>
      </footer>
    </div>
  );
};

export default ArduinoParkingSystem;
