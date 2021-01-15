import './App.css';
import React from 'react';

//component
import ToDoCom from "./components/ToDoCom/ToDoCom";


const name = 'Ihabs To-Do List'; 

function App() { //component
  return (
    <div className="App">
      <header className="App-header">        
        <p>
           {name}
        </p>
        <div class="container">
        <ToDoCom></ToDoCom>      
       </div>
      </header>
    </div>
  );
}

export default App;
