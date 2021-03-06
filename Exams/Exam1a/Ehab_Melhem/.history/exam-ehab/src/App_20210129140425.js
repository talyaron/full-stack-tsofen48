import "./App.css";
import { useState, useEffect } from "react";
import Card from "./Compents/Card";
function App() {
  const [total, setTotall] = useState(0);
  const [present, setPresnts] = useState([]);
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
    fetch("/get-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: localStorage.getItem("id") }),
    })
      .then((r) => r.json())
      .then((data) => {
        setId(data.user.id);
        console.log(data);
        setPresnts(data.user.present);
      });
  }, []);
  return (
    <div className="app">
      <div className="container">
        <h4>total sum available {total}$</h4>
        {
present.map()
        <Card totall={}/>
        }
        </div>
    </div>
  );
}

export default App;
