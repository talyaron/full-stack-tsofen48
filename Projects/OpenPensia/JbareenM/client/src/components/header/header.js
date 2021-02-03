import './header.css';
import React, { useEffect, useState } from "react";
import { set } from 'mongoose';



function Header() {

  const [all, setAll] = useState([]);
  const [company, setCompany] = useState("");
  const [extent , setExtent] = useState(18.3);

  useEffect(() => {
    fetch("/get-companies-name")
    .then(r => r.json())
    .then(data => {
      setCompany(data.name);
      setAll(data.directors)
    })
  }, []);

  return (
    <div className="Header">
        <h3>{company}</h3>
        <h3>{extent}%</h3> 
        <h3>שיעור ההחזקה שלך</h3> 
        <h3>תבחר/י מי יהיו הדרקטורים {company}</h3> 
    </div>
  );
}

export default Header;
