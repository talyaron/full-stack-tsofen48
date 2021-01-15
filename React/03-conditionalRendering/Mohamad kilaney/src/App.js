import React, { useState } from 'react';
import './App.css';

function App() {
  const [lamp, setLamp] = useState(true);

  function handlerLamp() {
    setLamp(!lamp);
  }

  function changeLamp() {
    if (lamp) {
      return (
        <div>
            <img src='https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg'/>
        </div>
      )
    } else {
      return (
        <div>
            <img src='https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg'/>
        </div>
      )
    }
  }
  
  return (
    <div className='cont'>
      <button className='lampButton' onClick={handlerLamp}>{lamp ? 'on' : 'off'}</button>
      {changeLamp()}
    </div>
  )
}

export default App;