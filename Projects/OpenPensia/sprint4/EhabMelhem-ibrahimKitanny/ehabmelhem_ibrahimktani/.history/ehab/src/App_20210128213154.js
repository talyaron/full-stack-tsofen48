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
  fetch("/users/get-user")
    .then((r) => r.json())
    .then((data) => {
      if(data.index)
      console.log(data);
      // setPersonal(data);
    });
  fetch("/users/vote")
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
      // setVoted(data);
    });
  return (
    <div className="app">
      <div className="contaner">
        <Header
          company={personal_data.company}
          Icon={personal_data.src}
          name={personal_data.name}
        />
        <Navbar />
        <Information withNum={voted.with} without={voted.without} />
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
