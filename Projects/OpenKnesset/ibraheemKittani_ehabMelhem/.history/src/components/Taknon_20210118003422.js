import React from "react";
import Subject from "./Subject";
import "./Taknon.css";
import Logo from "./Images/tak_icon.PNG";
function Taknon() {
  return (
    <div className="taknon scroll">
      <div>
        <Subject text="תקנון" Icon={Logo} />
      </div>

      <div className="taknon__data">
        <h5>
          מתוך דף הפייסבוק של האקדמיה ללשון העברית: "המילה סְתָם מוכרת לנו כבר
          מן המשנה, למשל: "אם של עבודה זרה נָדַר – מותר, ואם סְתָם – אסור" מתוך
          דף הפייסבוק של האקדמיה ללשון העברית: "המילה סְתָם מוכרת לנו כבר מן
          המשנה, למשל: "אם של עבודה זרה נָדַר – מותר, ואם סְתָם – אסור"
        </h5>
        <h5>(א)</h5>
        <h5>.51</h5>
        <h5 className="articl">נאומים בני דקה (תיקון מס' 112)</h5>
      </div>
    </div>
  );
}

export default Taknon;
