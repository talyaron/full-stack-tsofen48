import React, { useEffect } from "react";
import "./Info.css";
function Info(totall) {
  useEffect(() => {
    fetch("/refresh")
      .then((r) => r.json())
      .then((data) => {});
  }, []);
  return (
    <div className="info">
        <h1>you have been pau</h1>
      <button>Buy more</button>
    </div>
  );
}

export default Info;
