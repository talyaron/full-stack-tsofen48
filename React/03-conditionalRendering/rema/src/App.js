import './App.css';
import React, { useState } from 'react';

//components




function App() {
  const [on, setON] = useState(false);

  function handleSwitch() {
    setON(!on)
  }


  if (on) {
    return (
      <div className='maindiv'>
        <img className='img' src='https://cdn3.iconfinder.com/data/icons/monsters-3/66/26-512.png'></img>
      </div>
    )
  } else {
    return (<div>
      
      <button onClick={handleSwitch}  className='yellow' >{on ? 'Turn on light' : 'Turn off light'}</button>
    </div>)
  }
}

export default App;
