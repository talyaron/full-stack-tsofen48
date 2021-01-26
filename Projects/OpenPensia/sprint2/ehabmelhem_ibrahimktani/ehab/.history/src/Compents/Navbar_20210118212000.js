import React, { useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [flag, setFlag] = useState(0); // 0 or 1 or 2
  return (
    <div className="navbar">
      <div
        onClick={(e) => {
          console.log("ehab");
        }}
        className={flag == 0 ? "items active" : "items"}
      >
        <h5>נתוני הצבעה</h5>
      </div>
      <div
        onClick={(e) => {
          console.log("ehab");
        }}
        className={flag == 1 ? "items active" : "items"}
      >
        <h5>עוד מידע</h5>
      </div>
      <div
        onClick={(e) => {
          setFlag(2);
        }}
        className={flag == 2 ? "items active" : "items"}
      >
        <h5>סיכום פרטים</h5>
      </div>
    </div>
  );
}

export default Navbar;
