import React, { useEffect } from "react";
import "./Info.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Info(totall) {
  useEffect(() => {
    fetch("/refresh")
      .then((r) => r.json())
      .then((data) => {});
  }, []);
  return (
    <div className="info">
      <h1>you have been pay success full </h1>
      <Link to="/">
        <button>Buy more</button>
      </Link>
    </div>
  );
}

export default Info;
