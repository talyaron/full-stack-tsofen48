import "./App.css";
import React, { useState, useEffect } from "react";

//components
import Requestitem from "./components/requestitem.js";

function App() {
  const [requestitems, setrequestitems] = useState([]);

  useEffect(() => {
    fetch('/get-requestitemslist')
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setrequestitems(data.Requestitem);
      });
  }, []);

  return (
    <div className="App">
      <div>
        {requestitems.map((list, index) => {
          return (
            <Requestitem
              key={index}
              toolname={list.toolname}
              subject={list.subject}
              requestTime={list.requestTime}
              requestedBy={list.requestedBy}
              fullInstruction={list.fullInstruction}
              fReqContent={list.fReqContent}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
