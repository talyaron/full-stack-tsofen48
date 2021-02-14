import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import axios from "axios";
// import API from "./api";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/get-data")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setData(data.data);
      });
  }, []);

  function Home() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="inside">
          <Card _data={data} />
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// function _getData() {
//   return [
//     {
//       title: "שאילתה רגילה",
//       info:
//         "שאלה לשר על עניין שבתחום תפקדיו, אותה מפנה חבר כנסת, שאינו שר או סגן שר. התשובה לשאילתה תינתן במליאת הכנסת. על השר להשיב תוך 21 ימים.",
//     },
//     {
//       title: "נאום בן דקה",
//       info:
//         "נאום של חבר כנסת, בכל נושא ובאורך של כדקה (תלוי בטוב ליבו של יו״ר הכנסת או סגן יו״ר הכנסת המנהלים את הישיבה בפועל).",
//     },
//     {
//       title: "כינוס הכנסת בזמן הפגרה",
//       info:
//         "הגשת דרישה ליו״ר הכנסת על ידי 25 ח״כים לכינוס מליאה מיוחדת שתדון בהצעה לסדר היום.",
//     },
//   ];
// }
