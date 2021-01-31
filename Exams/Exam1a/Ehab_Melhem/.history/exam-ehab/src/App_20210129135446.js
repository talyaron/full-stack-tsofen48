import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [total, setTotall] = useState(0);
  const [id, setId] = useState("");
  useEffect(() => {
    fetch("/make-id")
      .then((r) => r.json())
      .then((data) => {
        if (localStorage.getItem("id") === null) {
          localStorage.setItem("id", data.id);
          setId(localStorage.getItem("id"));
        }
      });
    fetch("get-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div className="app">
      <div className="container">
        <h4>total sum available {total}$</h4>
      </div>
    </div>
  );
}

export default App;
