import React from "react";
import "./Image.css";


export default function Image(props) {
  let frames = [
    "https://i.ibb.co/qmbRtN7/black-gold-frame.png",
   "https://i.ibb.co/2Zyww1B/cool-rounded-frame.png",
    "https://i.ibb.co/PT0b2Hd/woden-frame.png",
  ];

  console.log(frames[Math.floor(Math.random() * frames.length)]);
  return (
    <div className="image" >
      <div
        className="frame"
 
      >
        <img
        className='imgFrame'
          src={
            props.noFrame
              ? ""
              : frames[Math.floor(Math.random() * frames.length)]
          }
          alt=""
        />
        <img className="imageToShow" src={props.src} />
      </div>
    </div>
  );
}
