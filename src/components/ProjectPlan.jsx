import React from "react";

const ProjectPlan = () => {
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
        <h1 style={{ fontSize: "2rem", margin: "0" }}>প্রকল্প পরিকল্পনা</h1>
      </header>

      {/* Content Section */}
      <main style={{ padding: "1rem 0" }}>
        {/* Objectives */}
        <section className="section-style">
          <h2>উদ্দেশ্য</h2>
          <ul>
            <li>স্বয়ংক্রিয় পার্কিং ব্যবস্থা তৈরি করা।</li>
            <li>দূরত্ব পরিমাপ এবং যানবাহনের প্রবেশ/প্রস্থান নিয়ন্ত্রণ।</li>
            <li>নির্ভুল সেন্সর ডেটার মাধ্যমে রিয়েল-টাইম কার্যক্রম।</li>
            <li>সাশ্রয়ী এবং স্কেল-আপযোগ্য সমাধান প্রদান।</li>
          </ul>
        </section>

        {/* Deliverables */}
        <section className="section-style">
          <h2>ডেলিভারেবলস</h2>
          <ul>
            <li>Arduino Uno-ভিত্তিক হার্ডওয়্যার প্রোটোটাইপ।</li>
            <li>সার্ভো মোটর দ্বারা গেট নিয়ন্ত্রণ ব্যবস্থা।</li>
            <li>আল্ট্রাসনিক ও আইআর সেন্সর ব্যবহার।</li>
            <li>রিয়েল-টাইম পার্কিং স্লট স্ট্যাটাস প্রদর্শন।</li>
          </ul>
        </section>

        {/* Timeline */}
        <section className="section-style">
          <h2>সময়সূচি</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>পর্ব</th>
                <th style={thStyle}>কাজ</th>
                <th style={thStyle}>সময়কাল</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>১</td>
                <td style={tdStyle}>গবেষণা এবং পরিকল্পনা</td>
                <td style={tdStyle}>১ সপ্তাহ</td>
              </tr>
              <tr>
                <td style={tdStyle}>২</td>
                <td style={tdStyle}>হার্ডওয়্যার ক্রয় ও সেটআপ</td>
                <td style={tdStyle}>২ সপ্তাহ</td>
              </tr>
              <tr>
                <td style={tdStyle}>৩</td>
                <td style={tdStyle}>কোডিং এবং পরীক্ষা</td>
                <td style={tdStyle}>৩ সপ্তাহ</td>
              </tr>
              <tr>
                <td style={tdStyle}>৪</td>
                <td style={tdStyle}>সিস্টেম অপটিমাইজেশন</td>
                <td style={tdStyle}>১ সপ্তাহ</td>
              </tr>
              <tr>
                <td style={tdStyle}>৫</td>
                <td style={tdStyle}>ফাইনাল প্রেজেন্টেশন প্রস্তুতি</td>
                <td style={tdStyle}>১ সপ্তাহ</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Budget */}
        <section className="section-style">
          <h2>বাজেট</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>পণ্য</th>
                <th style={thStyle}>মূল্য</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Arduino Uno R3</td>
                <td style={tdStyle}>৭৯৯ টাকা</td>
              </tr>
              <tr>
                <td style={tdStyle}>সার্ভো মোটর (২টি)</td>
                <td style={tdStyle}>২৭৬ টাকা</td>
              </tr>
              <tr>
                <td style={tdStyle}>আইআর সেন্সর (২টি)</td>
                <td style={tdStyle}>৮৬ টাকা</td>
              </tr>
              <tr>
                <td style={tdStyle}>আল্ট্রাসনিক সেন্সর</td>
                <td style={tdStyle}>৯২ টাকা</td>
              </tr>
              <tr>
                <td style={tdStyle}>জাম্পার তার</td>
                <td style={tdStyle}>১৭৫ টাকা</td>
              </tr>
              <tr>
                <td style={tdStyle}>পিভিসি বোর্ড </td>
                <td style={tdStyle}>১৬৭ টাকা</td>
              </tr>
              <tr>
                <td style={tdStyle}>ব্যাটারী ও কানেক্টর</td>
                <td style={tdStyle}>১১০ টাকা</td>
              </tr>
              <tr>
                <td style={tdStyle}>ব্রেডবোর্ড</td>
                <td style={tdStyle}>১৬০ টাকা</td>
              </tr>
              <tr>
                <td style={tdStyle}>অন্যান্য আনুষঙ্গিক</td>
                <td style={tdStyle}>৪০০ টাকা</td>
              </tr>
              <tr>
                <td style={tdStyle}>
                  <strong>মোট</strong>
                </td>
                <td style={tdStyle}>
                  <strong>২২৬৫ টাকা</strong>
                </td>
              </tr>
            </tbody>
          </table>
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
        <p>প্রজেক্ট পরিকল্পনা: মোঃ আব্দুস সবুর</p>
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

export default ProjectPlan;
