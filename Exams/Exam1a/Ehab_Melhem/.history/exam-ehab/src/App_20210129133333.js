import "./App.css";
import { useState } from "react";
function App() {
  const [total, setTotall] = useState(0);
  return (
    <div className="app">
      <h1>let's build app</h1>
      <div className="container">
        <h4>{total}$</h4>
      </div>
    </div>
  );
}

export default App;
