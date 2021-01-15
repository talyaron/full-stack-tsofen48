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
        <img src='https://png.pngtree.com/png-vector/20190820/ourlarge/pngtree-light-bulb-icon-vector--light-bulb-ideas-symbol-illustration-png-image_1694700.jpg' alt='b'></img>
        <button onClick={handleButton}>Surprise!</button>
      </div>
    );
  }
}

export default App;
