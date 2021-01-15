import './App.css';
import React, { useState } from 'react';

//components




function App() {
  const [isInput, setIsInput] = useState(true)



  function handleInputChange(){
    setIsInput(!isInput)
  }

  if (isInput) {
    return (
      <div>
        <button id ='left' onClick={handleInputChange}>click me</button>
        
      </div>
    )
  } else {
    return (<div>
      
      <button id ='right'onClick={handleInputChange}>click me</button>
    </div>)
  }
}

export default App;
