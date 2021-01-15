import './App.css';
import React, { useState } from 'react';


function App() {
  const [moveup, setMoveUp] = useState(true);
  const [counter, setCounter] = useState(1);

  function handleSwitch() {
    setMoveUp(!moveup)
    let counterAndOne = counter + 1;
    setCounter(counterAndOne)
    console.log(counter)
  }
    return (<div>
      <button style={{width:"100px",height:"100px"}} onClick={handleSwitch} className={moveup ? 'btn btn-primary movedown' : 'btn btn-danger moveup'} >{moveup ? 'catch me' : 'cant catch me :P'}</button>
    </div>)
  }


export default App;


