import './App.css';
import React, { useState } from 'react';

//components




function App() {
  const [isInput, setIsInput] = useState(false)



  function handleInputChange(){
    setIsInput(!isInput)
  }

  if (isInput) {
    return (
      <div>
        <button id ='left' onClick={handleInputChange}>click me</button>
        <p> you cant catch me</p>
      </div>
    )
  } else {
    return (<div>
      
      <button id ='right'onClick={handleInputChange}>click me</button>
      <p> you cant catch me</p>
    </div>)
  }
}

export default App;
