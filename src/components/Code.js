import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";

const ArduinoCodeDisplay = () => {
  const arduinoCode = `
#include <Servo.h>

const int trigPin = 4;
const int echoPin = 5;
const int distanceServoPin = 9;

const int IR1 = 2;
const int IR2 = 3;
const int parkingServoPin = 10;

Servo distanceServo;
Servo parkingServo;

int Slot = 3;
int flag1 = 0, flag2 = 0;
bool gateOpen = false;
String lastIr = "";

const int maxDistance = 20;
const int thresholdDistance = 10;

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  distanceServo.attach(distanceServoPin);
  distanceServo.write(0);

  pinMode(IR1, INPUT);
  pinMode(IR2, INPUT);
  parkingServo.attach(parkingServoPin);
  parkingServo.write(90);

  Serial.begin(9600);
}

void loop() {
  measureDistance();

  handleParking();
}

void measureDistance() {
  long duration, distance;

  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  duration = pulseIn(echoPin, HIGH);

  distance = duration * 0.034 / 2;

  if (distance > maxDistance) {
    distance = maxDistance;
  }

  int angle = map(distance, 1, maxDistance, 16, 173);

  distanceServo.write(angle);

  Serial.print("{\"distance\": ");
  Serial.print(distance);
  Serial.print(", \"angle\": ");
  Serial.print(angle);
  Serial.println("}");

  delay(200);
}

void handleParking() {
  Serial.println("{\"gateStatus\": \"\",\"status\": \"\", \"carOnGate\": false, \"parkingStatus\": \"\", \"slotsLeft\": " + String(Slot) + "}");

  if (Serial.available() > 0 && digitalRead(IR1) != LOW  && digitalRead(IR2) != LOW ) {
    String command = Serial.readStringUntil('\n');
    command.trim();
    if (command == "CLOSE") {
      parkingServo.write(90);
      gateOpen = false;
      flag1 = 0;
      flag2 = 0;
      lastIr = "";
    }
  }


  if (digitalRead(IR1) == LOW || digitalRead(IR2) == LOW) {
    Serial.println("{\"carOnGate\": true}");
  }


  if (digitalRead(IR1) == LOW && flag1 == 0) {
    if (lastIr == "ir2") {
      Slot++;
      lastIr = "";
    }
    else if (Slot > 0) {
      flag1 = 1;
      if (flag2 == 0) {
        parkingServo.write(0);
        gateOpen = true;
        lastIr = "ir1";
        Serial.println("{\"slotsLeft\": " + String(Slot) + "}");
      }
    } else {
      Serial.println("{\"parkingStatus\": \"Parking Full\", \"carOnGate\": false, \"slotsLeft\": " + String(Slot) + "}");
    }
  }

  if (digitalRead(IR2) == LOW && flag2 == 0) {
    if (lastIr == "ir1") {
      Slot--;
      lastIr = "";
    } else if (Slot >= 3) {
      Serial.println("{\"parkingStatus\": \"No car to exit\", \"slotsLeft\": " + String(Slot) + "}");
    } else {
      flag2 = 1;
      if (flag1 == 0) {
        parkingServo.write(0);
        gateOpen = true;
        lastIr = "ir2"; 
        Serial.println("{\"slotsLeft\": " + String(Slot) + "}");
      }
    }
  }

  if (flag1 == 1 && flag2 == 1) {
    delay(1000);
    parkingServo.write(90);
    gateOpen = false;
    flag1 = 0;
    flag2 = 0;
    Serial.println("{\"slotsLeft\": " + String(Slot) + "}");
  }

  if (gateOpen) {
    Serial.println("{\"gateStatus\": \"Gate opened\"}");
  } else {
    Serial.println("{\"gateStatus\": \"Gate closed\"}");
  }

  Serial.println("{\"slotsLeft\": " + String(Slot) + "}");
}

  `;

  return (
    <div
      style={{
        margin: "auto",
        padding: "1rem",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#444", marginBottom: "1rem" }}>
        Arduino Code for Parking and Distance System
      </h2>
      <SyntaxHighlighter
        language="cpp"
        style={materialOceanic}
        customStyle={{
          padding: "1rem",
          borderRadius: "6px",
          backgroundColor: "#282c34",
          color: "#fff",
          overflowX: "auto",
        }}
      >
        {arduinoCode}
      </SyntaxHighlighter>
    </div>
  );
};

export default ArduinoCodeDisplay;








//==============================previous c++ code=============================

// #include <Servo.h>

// // Pins for distance measurement
// const int trigPin = 8;
// const int echoPin = 9;
// const int distanceServoPin = 10;

// // Pins for parking system
// const int IR1 = 2;              // IR sensor for entry
// const int IR2 = 3;              // IR sensor for exit
// const int parkingServoPin = 4;  // Servo for parking slot

// Servo distanceServo;
// Servo parkingServo;

// int Slot = 3;  // Total parking slots available
// int flag1 = 0, flag2 = 0;
// bool gateOpen = false;

// const int maxDistance = 20;        // Maximum measurable distance in cm
// const int thresholdDistance = 10;  // Threshold distance for the glass

// void setup() {
//   // Setup for distance measurement
//   pinMode(trigPin, OUTPUT);
//   pinMode(echoPin, INPUT);
//   distanceServo.attach(distanceServoPin);
//   distanceServo.write(0);  // Initially at 0 degrees

//   // Setup for parking system
//   pinMode(IR1, INPUT);
//   pinMode(IR2, INPUT);
//   parkingServo.attach(parkingServoPin);
//   parkingServo.write(90);  // Initially closed

//   // Serial communication
//   Serial.begin(9600);
// }

// void loop() {
//   // Measure distance and control distance servo
//   measureDistance();

//   // Parking logic
//   handleParking();
// }

// void measureDistance() {
//   long duration, distance;

//   // Send a 10us pulse to trigger the ultrasonic sensor
//   digitalWrite(trigPin, LOW);
//   delayMicroseconds(2);
//   digitalWrite(trigPin, HIGH);
//   delayMicroseconds(10);
//   digitalWrite(trigPin, LOW);

//   // Measure the duration of the echo pulse
//   duration = pulseIn(echoPin, HIGH);

//   // Calculate distance in cm
//   distance = duration * 0.034 / 2;

//   // Ensure distance is within measurable range
//   if (distance > maxDistance) {
//     distance = maxDistance;  // Cap the distance at maxDistance
//   }

//   // Map the distance to servo motor angle (16-173 degrees)
//   int angle = map(distance, 1, maxDistance, 16, 173);

//   // Set main servo position
//   distanceServo.write(angle);

//   // Output JSON for distance and angle
//   Serial.print("{\"distance\": ");
//   Serial.print(distance);
//   Serial.print(", \"angle\": ");
//   Serial.print(angle);
//   Serial.println("}");

//   delay(200);  // Small delay to stabilize readings
// }

// void handleParking() {
//   Serial.println("{\"gateStatus\": \"\",\"status\": \"\",\"parkingStatus\": \"\", \"slotsLeft\": " + String(Slot) + "}");
//   // Entry logic
//   if (digitalRead(IR1) == LOW && flag1 == 0) {
//     if (Slot > 0) {
//       flag1 = 1;
//       if (flag2 == 0) {
//         parkingServo.write(0);  // Open parking gate
//         gateOpen = true;
//         Slot--;                 // Decrease slot count
//         Serial.println("{\"slotsLeft\": " + String(Slot) + "}");
//       }
//     } else {
//       Serial.println("{\"parkingStatus\": \"Parking Full\", \"slotsLeft\": " + String(Slot) + "}");
//     }
//   }

//   // Exit logic
//   if (digitalRead(IR2) == LOW && flag2 == 0) {
//     if (Slot >= 3) {
//       Serial.println("{\"parkingStatus\": \"No car to exit\", \"slotsLeft\": " + String(Slot) + "}");
//     } else {
//       flag2 = 1;
//       if (flag1 == 0) {
//         parkingServo.write(0);  // Open parking gate
//         gateOpen = true;
//         Slot++;                 // Increase slot count
//         Serial.println("{\"slotsLeft\": " + String(Slot) + "}");
//       }
//     }
//   }

//   // Reset servo once both flags are set
//   if (flag1 == 1 && flag2 == 1) {
//     delay(1000);
//     parkingServo.write(90);  // Close parking gate
//     gateOpen = false;
//     flag1 = 0;
//     flag2 = 0;
//     Serial.println("{\"slotsLeft\": " + String(Slot) + "}");
//   }

//   if (gateOpen) {
//     Serial.println("{\"gateStatus\": \"Gate opened\"}");
//   }else {
//     Serial.println("{\"gateStatus\": \"Gate closed\"}");
//   }

//   // Display slots remaining
//   Serial.println("{\"slotsLeft\": " + String(Slot) + "}");
// }
