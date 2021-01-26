import "./App.css";
import Header from "./Compents/Header";
import Information from "./Compents/Information";
import Navbar from "./Compents/Navbar";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { useEffect, useState } from "react";

function App() {
  const [personal_data, setPersonal] = useState([]);
  useEffect(() => {
    fetch("/get-user")
      .then((r) => r.json())
      .then((data) => {
        setPersonal(data);
      });
  }, []);
  return (
    <div className="app">
      <div className="contaner">
        <Header
          company="בנק הפועלים"
          Icon="https://instagram.fsdv3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/125438654_373110843960499_4486130208098717291_n.jpg?_nc_ht=instagram.fsdv3-1.fna.fbcdn.net&_nc_ohc=NDUGeHQAneQAX8vOHAM&tp=1&oh=8500725c449de8a495c329240d76c4c5&oe=602E028F"
          name="איהאב מלחם"
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
