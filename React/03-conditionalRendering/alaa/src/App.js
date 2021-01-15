import './App.css';
import React, { useState } from 'react';



function App() {
  const [isOn, setLight] = useState(true);
  function switchLight() {
    setLight(!isOn);
    document.querySelector('.App-header').className = isOn ? ' App-header night' : 'App-header light' ;
    document.querySelector('#scary-house').style.display = isOn ?'block'  :'none'  ;
    document.querySelector('#regular-house').style.display = isOn ?  'none' : 'block'  ;
  }
  return (

    <div className="App ">
      <header className="App-header light" >
        <div>
          <img id="scary-house" alt="" src="https://powerpestcontrol.ca/wp-content/uploads/2017/10/Fright-night-.jpg" />
        </div>
        <div >

          <img id="regular-house"alt="" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0ddfed34-a630-433a-b8b2-24a8d63b30d9/d8nk7aj-70fda53e-8ee5-4d22-ae0c-0b43e5d9db09.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMGRkZmVkMzQtYTYzMC00MzNhLWI4YjItMjRhOGQ2M2IzMGQ5XC9kOG5rN2FqLTcwZmRhNTNlLThlZTUtNGQyMi1hZTBjLTBiNDNlNWQ5ZGIwOS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.WsqQFHm-ki5B0bP2t49Hva99HZLVoc_eW8OOtAEi1U8" />
        </div>
        <button onClick={switchLight}>{isOn ? "turn on" : "turn off"}</button>
      </header>
    </div>
  );
}

export default App;
