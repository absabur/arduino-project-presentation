import React from "react";
import arduino from '../images/arduino.png'
import ultrasonic from '../images/ultrasonic.png'
import ir from '../images/ir.png'
import servo from '../images/servo.png'
import breadboard from '../images/breadboard.png'
import jumper from '../images/jumper.png'

const ParkingPresentation = () => {
  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", color: "#333", lineHeight: 1.6 }}>
      {/* Title Section */}
      <header style={{
        background: "linear-gradient(135deg, #3a7bd5, #3a6073)",
        color: "white",
        textAlign: "center",
        padding: "2rem",
      }}>
        <h1 style={{ fontSize: "2.5rem", margin: "0" }}>প্রক্সিপার্ক</h1>
        <p style={{ fontSize: "1.2rem" }}>Parking Slot and Distance Management System</p>
      </header>

      {/* Content Section */}
      <main style={{ padding: "1rem 0" }}>
        {/* Introduction */}
        <section className="section-style">
          <h2>ভূমিকা</h2>
          <p>
            বর্তমানে পার্কিং ব্যবস্থাপনার সমস্যা ও দূরত্ব নিয়ন্ত্রণে কার্যকর সমাধান প্রয়োজন। 
            এই প্রজেক্টটি স্বয়ংক্রিয় পার্কিং ও দূরত্ব পরিমাপ ব্যবস্থার উন্নততর সমাধান প্রদান করে।
          </p>
        </section>

        {/* Features */}
        <section className="section-style">
          <h2>বৈশিষ্ট্য</h2>
          <ul>
            <li>স্বয়ংক্রিয় পার্কিং ব্যবস্থাপনা</li>
            <li>দূরত্ব পরিমাপের সঠিকতা</li>
            <li>আইআর সেন্সর ও আল্ট্রাসনিক সেন্সরের সমন্বয়</li>
            <li>সার্ভো মোটর দ্বারা গেট নিয়ন্ত্রণ</li>
          </ul>
        </section>

        {/* Components Used */}
        <section className="section-style">
          <h2>ব্যবহৃত যন্ত্রাংশ</h2>
          <div className="equipments">
            <div className="equipment">Arduino Uno: <img src={arduino.src}/></div>
            <div className="equipment">HC-SR04 আল্ট্রাসনিক সেন্সর: <img src={ultrasonic.src}/></div>
            <div className="equipment">আইআর সেন্সর: <img src={ir.src}/></div>
            <div className="equipment">সার্ভো মোটর: <img src={servo.src}/></div>
            <div className="equipment">ব্রেডবোর্ড: <img src={breadboard.src}/></div>
            <div className="equipment">তার: <img src={jumper.src}/></div>
          </div>
        </section>

        {/* Working Principle */}
        <section className="section-style">
          <h2>কাজের পদ্ধতি</h2>
          <p>
            যানবাহন প্রবেশ এবং প্রস্থানের উপর ভিত্তি করে গেট খোলা ও বন্ধ হয়। 
            আল্ট্রাসনিক সেন্সর সাউন্ড ওয়েভ ব্যবহার করে দূরত্ব পরিমাপ করে এবং সার্ভো মোটর
            নির্দিষ্ট অ্যাঙ্গেলে ঘোরে।
          </p>
        </section>

        {/* Advantages */}
        <section className="section-style">
          <h2>সুবিধা</h2>
          <ul>
            <li>স্বয়ংক্রিয় ব্যবস্থাপনা</li>
            <li>খরচ-সাশ্রয়ী এবং সহজলভ্য উপকরণ</li>
            <li>রিয়েল-টাইম গেট নিয়ন্ত্রণ</li>
          </ul>
        </section>

        {/* Applications */}
        <section className="section-style">
          <h2>ব্যবহার</h2>
          <ul>
            <li>শপিং মল</li>
            <li>অফিস ভবন</li>
            <li>পাবলিক পার্কিং লট</li>
            <li>আবাসিক কমপ্লেক্স</li>
          </ul>
        </section>

        {/* Challenges */}
        <section className="section-style">
          <h2>চ্যালেঞ্জ</h2>
          <p>
            সেন্সরের জন্য পারিপার্শ্বিক আওয়াজ কমানো এবং বড় স্কেলে সিস্টেম স্কেল আপ করায়
            কিছু জটিলতা রয়েছে।
          </p>
        </section>

        {/* Future Scope */}
        <section className="section-style">
          <h2>ভবিষ্যৎ সম্ভাবনা</h2>
          <ul>
            <li>IoT সংযোগের মাধ্যমে অ্যাপ নিয়ন্ত্রণ</li>
            <li>আর্টিফিশিয়াল ইন্টেলিজেন্স ভিত্তিক যানবাহন সনাক্তকরণ</li>
            <li>স্বয়ংক্রিয় পেমেন্ট সিস্টেম</li>
          </ul>
        </section>

        {/* Conclusion */}
        <section className="section-style">
          <h2>উপসংহার</h2>
          <p>
            এই প্রজেক্টটি বর্তমান পার্কিং এবং দূরত্ব ব্যবস্থাপনার সমস্যার একটি কার্যকর সমাধান। 
            এটি ব্যবহারকারীদের সময় এবং খরচ সাশ্রয়ে সহায়ক হবে।
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        textAlign: "center",
        background: "#f1f1f1",
        padding: "1rem",
        marginTop: "2rem",
        borderTop: "1px solid #ccc"
      }}>
        <p>Made By Computer Science and Technology. Bogura Polytechnic Institute.</p>
      </footer>
    </div>
  );
};



export default ParkingPresentation;
