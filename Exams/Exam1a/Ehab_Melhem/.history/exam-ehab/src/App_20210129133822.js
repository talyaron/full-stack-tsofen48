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
  }, []);
  return (
    <div className="app">
      <div className="container">
        <h4>{total}$</h4>
      </div>
    </div>
  );
}

export default App;
