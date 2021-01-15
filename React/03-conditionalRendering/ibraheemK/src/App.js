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
      <div id ='left'>
        <button  onClick={handleInputChange}>click me</button>
        <p> you cant catch me</p>
      </div>
    )
  } else {
    return (<div id ='right'>
      
      <button onClick={handleInputChange}>click me</button>
      <p> you cant catch me</p>
      {/* alert("Hello! I am an alert box!!"); */}
      
    </div>)
  }
}

export default App;
