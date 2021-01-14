
import './App.css';
import Shape from './view/components/Card/Shape';
import React, { useState } from 'react';



function uniqueId(){
  return "id" + Math.random().toString(16).slice(2)
}

const items = [
{id:uniqueId(),img:'https://icon-library.com/images/circle-icon/circle-icon-9.jpg',title:'circle'},
{id:uniqueId(),img:'https://www.clker.com/cliparts/N/A/G/S/5/f/red-square-button-md.png',title:'square'},
{id:uniqueId(),img:'https://lh3.googleusercontent.com/proxy/gNz7mKVwXUmhFLZVs4Zz59_6zLMIHoteKTzrdEveIfgXBe4NYeL1U9eRf7DOrYCQB3es1dLtGYdhd6v0w6ZVAfoA',title:'triangle'}
]


function App() {

  var [randomShape, setShape] = useState('')
  const [Circounter, setCirCounter] = useState(0)
  const [squcounter, setSquCounter] = useState(0)
  const [tricounter, setTriCounter] = useState(0)
  const handleClick =  e => {

    let item = items[Math.floor(Math.random() * items.length)];
    randomShape=item.img;
    setShape(randomShape);
    
    
    if(item.title=='circle'){
    const newCirCounter = Circounter + 1;
    setCirCounter(newCirCounter);
    }
    if(item.title=='square'){
      const newSquCounter = squcounter + 1;
      setSquCounter(newSquCounter);
    }
    if(item.title=='triangle'){
      const newTriCounter = tricounter + 1;
      setTriCounter(newTriCounter);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <group>
      {items.map((item, index) => {
         
         return (<Shape 
           key={item.id}
           title={item.title}
           img={item.img}/> )
       })
       }
     </group>
     <div><img  className="randomShape" src={randomShape} alt=''></img></div>
     <div className="CircleCounter">
     <p>
         Circle Counter <span>({Circounter})</span>
          </p>
          </div>
          <div className="SquareCounter">
          <p>
         Square Counter <span>({squcounter})</span>
          </p>
          </div>
          <div className="TraingleCounter">
          <p>
         Traingle Counter <span>({tricounter})</span>
          </p>
          </div>
      </header>
      <button className="button" onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
