import React, { useState } from "react";
import HeaderUp from "./HeaderUp";
import DownDiv from "./DownDiv";
import Alert from "./Alert";
import "./HeaderUp.css";



function App() {
  const [alertMessage, SetAlertMessage] = useState("");
/*
 async function checkIfLoginIn(){
  const r = await fetch('/checkSignedIn');
  const data = await r.json();
 console.log(data.signed)

document.body.style.display=data.signed;
}*/


  function SendAllData() {
    const allVotes = localStorage.getItem("allVotes");
    let checker = localStorage.getItem("Sent?");

    if (localStorage.getItem("Sent?") === "true") {
      console.log("danger alert");
      SetAlertMessage(
        <Alert
          messageKind="Danger"
          strongSentence="Voted already !"
          regularSentence="You Can Only Vote Once Thank you!"
        />
      );
      return;
    }
    if (allVotes === null || allVotes === "") {
      console.log("fill alert");

      SetAlertMessage(
        <Alert
          messageKind="Fill"
          strongSentence="Please Rate At Least For 1 !"
          regularSentence="Thank you ..."
        />
      );
      return;
    }

    if (localStorage.getItem("Sent?") === null) {
      console.log("sucess alert");
      fetch("/votes/Get-setVotePoints", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ allVotes }),
      });
      SetAlertMessage(
        <Alert
          messageKind="Sucess"
          strongSentence="Sucessfully Vote!"
          regularSentence="Thank you for voting..."
        />
      );

      localStorage.setItem("Sent?", true);
      return;
    }
  }

  return (
    <div className="App" /*onLoad={checkIfLoginIn}*/>
      {alertMessage}
      <div className="contanier">
        <HeaderUp
          titleName="בנק הפועלים"
          precent="18.3%"
          title="שיעור ההחזקה שלך"
        />
      </div>

      <DownDiv /*Profiles={Profiles}*/ />
      <div className="middle">
        <button className="sendbutton" onClick={SendAllData}>
          {" "}
          שלח את ההצבעה שלי{" "}
        </button>
      </div>
    </div>
  );
}

export default App;
