import "./App.css";
import Header from "./Compents/Header";
import Information from "./Compents/Information";
import Navbar from "./Compents/Navbar";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { useEffect, useState } from "react";

function App() {
  const [personal_data, setPersonal] = useState([]);
  const [voted, setVoted] = useState([]);
  fetch("/get-user")
    .then((r) => r.json())
    .then((data) => {
      setPersonal(data);
    });
    fetch("/vote").then(r=>r.json()).then
  return (
    <div className="app">
      <div className="contaner">
        <Header
          company={personal_data.company}
          Icon={personal_data.src}
          name={personal_data.name}
        />
        <Navbar />
        <Information withNum={80} without={20} />
        <p>?מה הבחינה שלך</p>
        <div className="thumps">
          <div className="thumpItem">
            <ThumbUpIcon className="thump" />
            <p>אני בעד</p>
          </div>
          <div className="thumpItem">
            <ThumbDownIcon className="thump" />
            <p>אני נגד</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
