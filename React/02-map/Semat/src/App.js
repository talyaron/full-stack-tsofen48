import logo from './logo.svg';
 import vil from './mua.jpg';
import './App.css';
import Card from './view/components/Card/Card';
import React, { useState } from 'react';



// function uniqueId(){
//   return "id" + Math.random().toString(16).slice(2)
// }

// const pics = [
//   {id:uniqueId(), img: 'https://www.playdosgames.com/assets/screenshots/dangerous-dave.png', title: 'Dangerous Dave' },
//   {id:uniqueId(),
//      img: 'https://static.retrogames.cc/screenshot/55/u/19290_8cd40ab17ee98ce1daa2cd5fc27b838172d641bd.png',
//    title: 'Super Mario' },
//   {id:uniqueId(),
//      img: 'https://classicreload.com/sites/default/files/styles/game_image/public/skyroads-screenshot.png?itok=eEOiU8lk', 
//   title: 'Sky Roads' },
//   {id:uniqueId(),
//      img: 'https://image.dosgamesarchive.com/screenshots/thumbnails/WOLF-01.png',
//    title: 'Wolfenstein' }
// ]

//////////////////////////////////////////////////////////////////
// useState
function Window() {
  const [on, setOn] = useState(false);

  const WinOpen = () => setOn(true);
  const WinClose = () => setOn(false);

  return (
    <>
      <div className={on ? "win-open" : "win-close"} />
      <button onClick={WinOpen}>Open</button>
      <button onClick={WinClose}>Close</button>
    </>
  );
}


function App() {
// useState

  // body
  return (
    <div className="App">
      <header className="App-header">
        <h1></h1>
       
    <div class="myWindow">
        <Window />
        </div>
       
      </header>
    </div>
  );
}

export default App;
