import "./App.css";
import { useState } from "react";
function App() {
  const [total, setTotall] = useState(0);
  var uid = new Date().getTime().toString(36);
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
