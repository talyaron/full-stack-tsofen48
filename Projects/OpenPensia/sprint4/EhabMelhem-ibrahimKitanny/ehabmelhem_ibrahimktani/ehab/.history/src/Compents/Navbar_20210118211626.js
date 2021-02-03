import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="items active">
        <h5>נתוני הצבעה</h5>
      </div>
      <div className="items">
        <h5>עוד מידע</h5>
      </div>
      <div className="items">
        <h5>סיכום פרטים</h5>
      </div>
    </div>
  );
}

export default Navbar;
