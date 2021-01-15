import './App.css';
import React, { useState } from 'react';

//components




function App() {
  const [ok, setOk] = useState(false);

  function handleSwitch() {
    setOk(!ok)
  }

  if (ok) {
    return (
      <div>
        <img src={"https://www.shipimmigration.com/wp-content/uploads/2015/10/light-bulb-2-1427493.jpg"} alt="on" />
        <button onClick={handleSwitch} className={ok ? 'blue' : 'green'} >{ok ? 'OK' : 'not OK'}</button>
      </div>
    )
  } else {
    return (<div>
      <img src={"https://freeonlineflashlight.com/img/bulb.png"} alt="off" />
      <button onClick={handleSwitch} className={ok ? 'blue' : 'green'} >{ok ? 'OK' : 'not OK'}</button>
    </div>)
  }
}

export default App;
