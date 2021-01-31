import "./App.css";
import { useState } from "react";
function App() {
  const [total, setTotall] = useState(0);
  console.log(uid);
  return (
    <div className="app">
      <div className="container">
        <h4>{total}$</h4>
      </div>
    </div>
  );
}

export default App;
