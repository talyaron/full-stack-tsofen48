//import logo from './logo.svg';
import './App.css';
import React from 'react';

//components
import Card from "./components/Card/Card"
import TwoComp from "./components/TwoComp/TwoComp"

const name = 'Ihabs A.H Page';

function App() { //component
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
           {name}
        </p>
        <Card title='hi' img='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-flower-bouquet-1588610191.jpg?crop=1.00xw:0.892xh;0,0.108xh&resize=1200:*' />
        <TwoComp nameOf="Cat" title="Nice Gray Cat" img='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'></TwoComp>

        <h2>Learn to code</h2>
      </header>
    </div>
  );
}

export default App;
