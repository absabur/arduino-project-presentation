import React from "react";
import "./TollGate.css"; // Import the CSS file for styling and animation

import { HiHandRaised } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";
function TollGate({ gateStatus }) {
  return (
    <div className="tollgate-container">
      <div
        className={`gate ${gateStatus == "Gate opened" ? "open" : "closed"}`}
      >
        {gateStatus == "Gate opened" ? (
          <div className="stop-go go">
            <div className="inner-stop-go" style={{ padding: "10px" }}>
              <FaArrowRight fontSize={50} />
            </div>
          </div>
        ) : (
          <div className="stop-go stop">
            <div className="inner-stop-go" style={{ padding: "10px" }}>
              <HiHandRaised fontSize={50} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TollGate;
