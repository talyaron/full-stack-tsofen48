import './App.css';
import React, { useState } from 'react';


function App() {

  const [isDark, setDark] = useState(false);

  function handleButton() {
    setDark(!isDark);
    console.log(isDark);
  }

  if (isDark) {
    return (<div className='dark'>
      <img src='https://icons.iconarchive.com/icons/spoon-graphics/monster/512/Orange-Monster-icon.png' alt='ab'></img>
      <button onClick={handleButton}>Go back to safety</button>

    </div>)
  } else {
    return (
      <div className='light'>
        <img src='https://freepngimg.com/thumb/bulb/4-yellow-light-bulb-png-image.png' alt='b'></img>
        <button onClick={handleButton}>Surprise!</button>
      </div>
    );
  }
}

export default App;
