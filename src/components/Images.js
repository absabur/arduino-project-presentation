import React from "react";

import arduino from "../images/arduino.jpg";
import meter from "../images/meter.jpg";
import insideboard from "../images/insideboard.jpg";
import parking from "../images/parking.jpg";
import toolgate from "../images/toolgate.jpg";
import preview1 from "../images/preview1.jpg";
import preview2 from "../images/preview2.jpg";
import preview3 from "../images/preview3.jpg";

import Link from "next/link";

const Images = () => {
  return (
    <div
      style={{
        fontFamily: "'Roboto', sans-serif",
        color: "#333",
        lineHeight: 1.6,
      }}
    >
      {/* Title */}
      <header
        style={{
          background: "linear-gradient(135deg, #11998e, #38ef7d)",
          color: "white",
          textAlign: "center",
          padding: "1.5rem",
        }}
      >
        <h1 style={{ fontSize: "2rem", margin: "0" }}>Gallery</h1>
      </header>

      {/* Content Section */}
      <main style={{ padding: "1rem 0" }}>
        <section
          className="section-style"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <Link target="_blank" href={`http://localhost:3000//${arduino.src}`}>
            <img className="gallery-img" src={arduino.src} />
          </Link>
          <Link target="_blank" href={`http://localhost:3000//${meter.src}`}>
            <img className="gallery-img" src={meter.src} />
          </Link>
          <Link
            target="_blank"
            href={`http://localhost:3000//${insideboard.src}`}
          >
            <img className="gallery-img" src={insideboard.src} />
          </Link>
          <Link target="_blank" href={`http://localhost:3000//${parking.src}`}>
            <img className="gallery-img" src={parking.src} />
          </Link>
          <Link target="_blank" href={`http://localhost:3000//${toolgate.src}`}>
            <img className="gallery-img" src={toolgate.src} />
          </Link>
          <Link target="_blank" href={`http://localhost:3000//${preview1.src}`}>
            <img className="gallery-img" src={preview1.src} />
          </Link>
          <Link target="_blank" href={`http://localhost:3000//${preview2.src}`}>
            <img className="gallery-img" src={preview2.src} />
          </Link>
          <Link target="_blank" href={`http://localhost:3000//${preview3.src}`}>
            <img className="gallery-img" src={preview3.src} />
          </Link>
        </section>
      </main>

      {/* Footer */}
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

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  margin: "1rem 0",
};

const thStyle = {
  background: "#11998e",
  color: "white",
  padding: "0.5rem",
  textAlign: "left",
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "0.5rem",
};

export default Images;
