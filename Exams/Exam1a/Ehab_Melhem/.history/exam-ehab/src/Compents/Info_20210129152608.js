import React,{useEffect} from "react";
import "./Info.css";
function Info(totall) {
    useEffect(()=>{
        fetch("/refresh")
    },[])
  return (
    <div className="info">

      <button>Buy more</button>
    </div>
  );
}

export default Info;
