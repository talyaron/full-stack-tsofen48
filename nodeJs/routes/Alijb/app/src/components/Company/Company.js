import React from "react";
import "./Company.css";
function Company(props) {
  const data = props.data;
  return (
    <div className="main">
      <img src={data.img} alt="img" />
      <div>
        <p className="p">{data.title}</p>
        <p>{data.desc}</p>
      </div>
      <button>^</button>
    </div>
  );
}

export default Company;
