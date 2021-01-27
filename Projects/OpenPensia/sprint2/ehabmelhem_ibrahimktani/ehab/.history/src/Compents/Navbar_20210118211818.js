import React, { useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [flag, setFlag] = useState(0);
  return (
    <div className="navbar">
      <div
        onClick={(e) => {
          console.log("ehab");
        }}
        className="items active"
      >
        <h5>נתוני הצבעה</h5>
      </div>
      <div
        onClick={(e) => {
          console.log("ehab");
        }}
        className="items"
      >
        <h5>עוד מידע</h5>
      </div>
      <div
        onClick={(e) => {
          console.log("ehab");
        }}
        className="items"
      >
        <h5>סיכום פרטים</h5>
      </div>
    </div>
  );
}

export default Navbar;
