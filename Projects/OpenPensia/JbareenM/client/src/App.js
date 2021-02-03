import "./App.css";
import React, { useEffect, useState } from "react";
import Header from './components/header/header.js';
import Row from './components/rows/row.js';

//import components

function App() {
  // const [all, setAll] = useState([]);
  // const [age, setAge] = useState(0);
  // const [src, setSrc] = useState("");
  // const [name, setName] = useState("");

  useEffect(() => {
    console.log("stam");
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <Row></Row>
      </div>
  );
}

export default App;
