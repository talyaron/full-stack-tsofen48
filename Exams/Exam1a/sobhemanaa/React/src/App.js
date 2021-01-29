import React, { useState } from "react";
import HeaderUp from "./HeaderUp";


import "./HeaderUp.css";

const Profiles = [
  {
    img:
      "https://th.bing.com/th/id/OIP.UDeXygALlGOe_yH6lJHp5QHaIr?pid=Api&rs=1",
    title: "רונית אבו רמזון רוקח",
  },
  {
    img:
      "https://th.bing.com/th/id/OIP.UDeXygALlGOe_yH6lJHp5QHaIr?pid=Api&rs=1",
    title: "עיסאוי פריג",
  },
  {
    img:
      "https://th.bing.com/th/id/OIP.UDeXygALlGOe_yH6lJHp5QHaIr?pid=Api&rs=1",
    title: "דליה לב",
  },
  {
    img:
      "https://th.bing.com/th/id/OIP.UDeXygALlGOe_yH6lJHp5QHaIr?pid=Api&rs=1",
    title: "דליה לב",
  },
];
const items = [
  {img:'https://icon-library.com/images/circle-icon/circle-icon-9.jpg',title:'circle'},
  ]
function App() {
  const [alertMessage, SetAlertMessage] = useState("");

  return (
    <div className="App" >
      <div className="contanier">
        <HeaderUp
         total='total sum avalible: '
         precent
    img='https://static.vecteezy.com/system/resources/previews/000/610/896/original/gift-box-love-logo-design-concept-template-vector.jpg'
    img='https://static.vecteezy.com/system/resources/previews/000/610/896/original/gift-box-love-logo-design-concept-template-vector.jpg'
    img='https://static.vecteezy.com/system/resources/previews/000/610/896/original/gift-box-love-logo-design-concept-template-vector.jpg'
    img='https://static.vecteezy.com/system/resources/previews/000/610/896/original/gift-box-love-logo-design-concept-template-vector.jpg'
        />
      </div>
      
   

      
    </div>
  );
}

export default App;
