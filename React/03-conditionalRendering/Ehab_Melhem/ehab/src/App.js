import "./App.css";
import React, { useState } from "react";

//components

function App() {
  const [ok, setOk] = useState(false);
  const [value, setValue] = useState("Press Me");
  const [isInput, setIsInput] = useState(false);
  const [postion, setPostion] = useState(0);
  function change() {
    if (postion >= 1000) {
      setValue("gameOver");
      setPostion(0);
    }
    if (postion === 0) {
      setPostion(1000);
    }
    if (postion > 0 && postion < 1000) {
      alert("Perfect");
    }
    setOk(!ok);
  }
  return (
    <div>
      <style>{`
        .btn {
          display: block;
          position: relative;
          margin-left:${postion}px;
            transition: margin-left 600ms ease-in-out;
        }
        `}</style>
      <button className="btn" onClick={change}>
        {value}
      </button>
    </div>
  );
}

export default App;
