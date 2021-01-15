import logo from './logo.svg';
 import vil from './mua.jpg';
import './App.css';
import Card from './view/components/Card/Card';
import React, { useState } from 'react';




//////////////////////////////////////////////////////////////////
// useState

  


function App() {
// useState

const [count, setCount] = useState(0);

  // const WinOpen = () => setOn(true);
  // const WinClose = () => setOn(false);

  function counter(){
    setCount(preCount => preCount+1)
  }

  return (
    <>
      {/* <div className={on ? "win-open" : "win-close"} /> */}
      <button onClick={counter}>{count}</button>
      
    </>
  );
}






  // body
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <h1></h1>
       
  //   {/* <div class="myWindow">
  //       <Window />
  //       </div> */}
       
  //     </header>
  //   </div>
  // );
//}

export default App;
