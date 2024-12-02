import React from "react";
import ArduinoCodeDisplay from "./Code";
import diagram from '../images/diagram.png'

const ProcessFlow = () => {
  return (
    <div
      style={{
        fontFamily: "'Roboto', sans-serif",
        color: "#444",
        lineHeight: 1.6,
      }}
    >
      {/* Header */}
      <header
        style={{
          background: "linear-gradient(135deg, #6a11cb, #2575fc)",
          color: "white",
          textAlign: "center",
          padding: "1.5rem",
        }}
      >
        <h1 style={{ fontSize: "2rem", margin: "0" }}>প্রক্রিয়া প্রবাহ</h1>
      </header>

      {/* Main Content */}
      <main style={{ padding: "1.5rem 0" }}>
        <section className="section-style">
          <h2>ধাপে ধাপে প্রক্রিয়া</h2>
          <ol>
            <li>
              <strong>যানবাহনের প্রবেশ শনাক্তকরণ:</strong>
              আইআর সেন্সর ১ (পিন ২) সেন্সর যানবাহনের প্রবেশ সনাক্ত করে।
            </li>
            <li>
              <strong>পার্কিং স্লট যাচাই:</strong>
              সিস্টেম চেক করে স্লট উপলব্ধ আছে কি না।
              <ul style={{paddingLeft: "2rem"}}>
                <li>যদি স্লট খালি থাকে, গেট স্বয়ংক্রিয়ভাবে খোলে।</li>
                <li>যদি স্লট পূর্ণ হয়, এলার্ট মেসেজ পাঠায়।</li>
              </ul>
            </li>
            <li>
              <strong>গেট খোলা:</strong>
              সার্ভো মোটর (পিন ৪) গেট খোলে, এবং যানবাহন প্রবেশ করে।
            </li>
            <li>
              <strong>স্লট সংখ্যা আপডেট:</strong>
              যানবাহন প্রবেশের পর স্লট সংখ্যা কমিয়ে আপডেট করা হয়।
            </li>
            <li>
              <strong>যানবাহনের প্রস্থান শনাক্তকরণ:</strong>
              আইআর সেন্সর ২ (পিন ৩) প্রস্থান শনাক্ত করে।
            </li>
            <li>
              <strong>গেট বন্ধ করা:</strong>
              যানবাহন প্রস্থান করার পর গেট স্বয়ংক্রিয়ভাবে বন্ধ হয়।
            </li>
            <li>
              <strong>দূরত্ব পরিমাপ:</strong>
              আল্ট্রাসনিক সেন্সর গাড়ির উপস্থিতি ও দূরত্ব পরিমাপ করে।
              <ul style={{paddingLeft: "2rem"}}>
                <li>
                  ২০ সেন্টিমিটার দূরত্ব সমান ১৮০° ঘূর্ণনের মাধ্যমে ইঙ্গিত করা
                  হয়।
                </li>
              </ul>
            </li>
          </ol>
        </section>

        <section className="section-style">
          <h2>প্রকল্পের কাজের প্রবাহ চিত্র</h2>
          <p>নিচের কাজের ধাপগুলি প্রকল্পের পূর্ণ কার্যপ্রণালীকে নির্দেশ করে:</p>
          <ul>
            <li>প্রবেশ - আইআর সেন্সর ১ সক্রিয়</li>
            <li>চেক - স্লটের উপলব্ধতা যাচাই</li>
            <li>গেট খোলা - সার্ভো মোটর দ্বারা</li>
            <li>প্রস্থান - আইআর সেন্সর ২ সক্রিয়</li>
            <li>গেট বন্ধ এবং স্লট সংখ্যা আপডেট</li>
          </ul>
        </section>
        <section className="section-style">
        <h2>Circuite Diagram</h2>
          <img src={diagram.src}/>
        </section>
        <section className="section-style">
          <ArduinoCodeDisplay />
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
        <p>প্রক্রিয়া উপস্থাপনা: মোঃ আব্দুস সবুর</p>
      </footer>
    </div>
  );
};



export default ProcessFlow;
