import "./App.css";
import Icon from "./components/Icon.js";
import React, { useState, useEffect } from "react";
import MainHeader from "./components/MainHead.js";
import MainFooter from "./components/MainFooter.js";

function App() {
  const [requestitemslist, setrequestitems] = useState([]);

  useEffect(() => {
    fetch("/get-requestitemslist")
      .then((r) => r.json())
      .then((data) => {
        console.log(data.rawdata.requestitemslist);
        setrequestitems(data.rawdata.requestitemslist);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <MainHeader />
        <span className="line"> </span>
      </header>
      <div className="e">
        <a href="/">דף בית</a>
        <span> / </span> <a href="/">לוח מעקב</a>
      </div>

      <div>
        {requestitemslist.map((list, index) => {
          return (
            <Icon
              key={index}
              date={list.date}
              name={list.name}
              title={list.title}
              dateSend={list.dateSend}
              Courage={list.Courage}
              Wasread={list.Wasread}
              content={list.content}
            />
          );
        })}
      </div>

      <footer className="App-footer">
        <span className="line2"> </span>
        <p></p>
        <MainFooter />
      </footer>
    </div>
  );
}

export default App;
