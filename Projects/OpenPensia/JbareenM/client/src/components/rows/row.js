import './row.css';
import React, { useEffect, useState } from "react";


function Row() {
  const [all, setAll] = useState([]);
  const [company, setCompany] = useState("");
  const [extent, setExtent] = useState(18.3);

  useEffect(() => {
    fetch("/get-companies-name")
      .then(r => r.json())
      .then(data => {
        setCompany(data.name);
        setAll(data.directors)
      })
  }, []);

  return (
    <div className="rows">
      {all.map((elm) => (
        <div className="container">
          <div className="row">
            <img src={elm.img} alt="" />
            <a href="#">
              {elm.name}
            </a>
          </div>
          <div className="details">
            <a>like</a>
            <a>dislike</a>
            <a>info</a>
          </div>
        </div>
      ))}

      <button id="send_vote">שלח את ההצבעה שלי!</button>
    </div>
  );
}

export default Row;
