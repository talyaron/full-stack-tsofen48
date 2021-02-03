import "./Icon.css";
import React, { useState } from "react";

function Icon(props) {
  return (
    <div className="icon">
      <div className="container">
        <p>
          <h6>
            {props.date} {props.name}
          </h6>

          <h3>{props.title}</h3>
        </p>
        <br />

        <p>
          <h6>
            תוכן הגשה:
            {props.dateSend}
          </h6>

          <h6>
            אומץ על ידי:
            {props.Courage}
          </h6>
          <h6>
            הוקרא במליאה:
            {props.Wasread}
          </h6>
        </p>
        <br />
        <h4>תוכן:</h4>
        <h6> {props.content}</h6>
      </div>
    </div>
  );
}
export default Icon;
