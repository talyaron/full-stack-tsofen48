import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [total, setTotall] = useState(0);
  useEffect(() => {
    fetch("/make-id")
      .then((r) => r.json())
      .then((data) => {
        if (localStorage.getItem("id") === null) {
          localStorage.setItem("id", data.id);
        }
      });
    fetch("/get-user")
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
