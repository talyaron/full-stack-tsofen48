import React from "react";
import "./Data.css";
function Data({ src }) {
  return (
    <div className="container">
      <img src={src} alt="" />
    </div>
  );
}

export default Data;
