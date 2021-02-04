import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="options">
        <div className="option">
          <h2> ח"כים וסיעות </h2>
        </div>
        <div className="option">
          <h2>ועדות</h2>
        </div>
        <div className="option">
          <h2> כלים פלמרנטריים</h2>
        </div>
      </div>
      <div className="signOrSingOut">
        <h2>
          <span className="userTag">👤</span>התחבר למערכת{" "}
        </h2>
      </div>
    </div>
  );
}
