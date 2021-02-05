import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/login/Login")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h1>this is h1</h1>
    </div>
  );
}

export default App;
