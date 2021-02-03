import React, { useState } from "react";
import AutoComplete from "../AutoComplete/AutoComplete";
import CustomizedHook from "./CustomizedHook/CustomizedHook";
import "./SuggestionFrom.css";

export default function SuggestionFrom() {
  const [selectedMembers, setSelectedMembers] = useState([]);
  let handleSubmit = (e) => {
    e.preventDefault();

    const subject = document.querySelector("#subject").value;
    const explanation = document.querySelector("#explanation").value;

    document.querySelector("#subject").value = "";
    document.querySelector("#explanation").value = "";

    const suggestion = {
      subject: subject,
      explanation: explanation,
      member: selectedMembers||"רימה",
    };

    fetch("/post-suggestion", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ suggestion }),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="suggestionFromContainer">
      <div className="title">
        <icon
          className="fa fa-bullhorn icon"
          style={{ marginRight: "20px" }}
        ></icon>
        <div className="vertical-line"></div>
        <h6>הגשת הצעה</h6>
      </div>
      <form className="suggestionFrom" onSubmit={handleSubmit}>
        <div name="container">
          <label className="suggestionSubject">נושא הצעה לסדר :</label>
          <input
            className="suggestionSubjectInput"
            id="subject"
            name="subject"
          ></input>
          <label>דברי הסבר :</label>
          <textarea
            className="suggestionExplanation"
            id="explanation"
          ></textarea>
        </div>
        <div>
          <label>ח"כים רלוונטיים :</label>
          <AutoComplete
            selectedMembers={selectedMembers}
            setSelectedMembers={setSelectedMembers}
          ></AutoComplete>

          {/* <label>קבצים ומסמכים תומכים : </label> */}

          <br />
          <br />
          <br />

          <button className="submitBtn" type="submit">
            שלח
          </button>
        </div>
      </form>
    </div>
  );
}
