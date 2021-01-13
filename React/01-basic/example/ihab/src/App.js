//import logo from './logo.svg';
import './App.css';
import React from 'react';

//components
import OneComp from "./components/OneComp/OneComp"
import TwoComp from "./components/TwoComp/TwoComp"
import ThreeComp from "./components/ThreeComp/ThreeComp"

const name = 'Ihabs A.H Page';

function App() { //component
  return (
    <div className="App">
      <header className="App-header">        
        <p>
           {name}
        </p>
        <div class="container">
        <OneComp nameOf="Component 1" title="Nice Flowers" img='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-flower-bouquet-1588610191.jpg?crop=1.00xw:0.892xh;0,0.108xh&resize=1200:*' />
        <TwoComp nameOf="Component 2" title="Nice Gray Cat" img='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'></TwoComp>
        <ThreeComp nameOf="Component 3" title="Nice Gray Lama" img="https://pixnio.com/free-images/2018/12/02/2018-12-02-19-17-09-1200x801.jpg" ThreeComp /> 
        </div>
      </header>
    </div>
  );
}

export default App;
