import logo from './logo.svg';
import rabbitimg from './rabbit.jpg';
import './App.css';
import React, { useState } from 'react';

// You only need one card (Tal)


function App() {
  const [eventTarget, setEventTarget] = useState();
  const [text, setText] = useState('some starting text')
  const [names, setNames] = useState([])

  function handleChange(e) {
    //setEventTarget(e.target.value);  //  the another way
  }

  function handleSubmit(e) {
    e.preventDefault();

  }

  function handleSubmit2(e) {
    //setText(eventTarget);  //  the another way
    const newText = document.querySelector('.input').value;
    setText(newText);
    names.push(newText);
    setNames(names);

  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input className='input' type='text' placeholder='name' defaultValue={text} name='name' onChange={handleChange} />
        <button onClick={handleSubmit2}>add</button>
      </form>
      {names.map(n=>{
        return(<p>{n}</p>)
      })}
    {/* <p>{names}</p> */} 
    </div>
  );
}

export default App;
