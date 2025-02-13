"use client";
import ResetButton from "@/components/Reset";
import SlotUpdate from "@/components/SlotUpdate";
import React, { useState } from "react";

const Admin = () => {
  const [access, setAccess] = useState(false);
  const handleAccess = () => {
    const password = document.getElementById("password").value;
    if (password === "bpi") {
      setAccess(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };
  return (
    <>
      {!access ? (
        <form
          onSubmit={() => handleAccess()}
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            gap: "1rem",
            width: "400px",
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            fontFamily: "'Roboto', sans-serif",
            flexDirection: "column",
          }}
        >
          <label htmlFor="password">Enter Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            style={{ padding: "0.5rem" }}
            required
          ></input>
          <button
            type="submit"
            style={{ padding: "0.5rem", cursor: "pointer" }}
          >
            Submit
          </button>
        </form>
      ) : (
        <div
          style={{
            fontFamily: "'Roboto', sans-serif",
            color: "#333",
            lineHeight: 1.6,
          }}
        >
          <header
            style={{
              background: "linear-gradient(135deg, #11998e, #38ef7d)",
              color: "white",
              textAlign: "center",
              padding: "1.5rem",
            }}
          >
            <h1 style={{ fontSize: "2rem", margin: "0" }}>Admin Panel</h1>
          </header>

          {/* Content Section */}
          <main style={{ padding: "1rem 0", display: "flex", gap: "1rem", flexDirection: "column", alignItems: "center" }}>
            <SlotUpdate />
            <ResetButton />
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
      )}
    </>
  );
};

export default Admin;
