import './App.css';
import React, { useState } from 'react';

//components




function App() {
  const [ok, setOk] = useState(false);
  const [isInput, setIsInput] = useState(false)

  function handleSwitch() {
    setOk(!ok)
  }

  function handleInputChange(){
    setIsInput(!isInput)
  }

  if (isInput) {
    return (
      <div>
        <input type='text' placeholder='press me' onFocus={handleInputChange}/>
      </div>
    )
  } else {
    return (<div>
      
      <button onClick={handleInputChange}>Change to input</button>
      <button onClick={handleSwitch} className={ok ? 'blue' : 'green'} >{ok ? 'OK' : 'not OK'}</button>
    </div>)
  }
}

export default App;
