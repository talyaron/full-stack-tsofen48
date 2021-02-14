import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Components/Header/Header";
import DescComp from "./Components/DescComp/DescComp";
import Navbar from "./Components/NavBar/Navbar";
import API from "./api";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);
  const [voteData, setVoteData] = useState([]);

  useEffect(() => {
    axios
      .all([API.get("/voteData/getUserData"), API.get("/voteData/getVoteData")])
      .then((responseArr) => {
        //this will be executed only when all requests are complete
        setUserData({
          name: responseArr[0].data.name,
          company: responseArr[0].data.company,
          src: responseArr[0].data.src,
        });

        setVoteData(responseArr[1].data.vote);
      });
    // fetch("/voteData/getUserData")
    //   .then((r) => r.json())
    //   .then((data) => {
    //     console.log(data);
    //     setUserData({ name: data.name, src: data.src, src: data.src });
    //   });

    // fetch("/voteData/getVoteData")
    //   .then((r) => r.json())
    //   .then((data) => {
    //     console.log(data);
    //     setVoteData(data.vote);
    //   });
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/summary">
            <Summary />
          </Route>
        </Switch>
        <Switch>
          <Route path="/more">
            <More />
          </Route>
        </Switch>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );

  function Home() {
    return (
      <div className="app">
        <div className="container">
          <Header
            name={userData.name}
            company={userData.company}
            Icon={userData.src}
          />
          <Navbar />
          <DescComp withNum={voteData.positive} without={voteData.negative} />
        </div>
      </div>
    );
  }

  function Summary() {
    return <h1>Summary</h1>;
  }

  function More() {
    return <h1>more</h1>;
  }
}

export default App;
