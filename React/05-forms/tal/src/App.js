import logo from './logo.svg';
import rabbitimg from './rabbit.jpg';
import './App.css';
import React, { useState } from 'react';

// You only need one card (Tal)


function App() {

  const [text, setText] = useState('some starting text')

  function handleChange(e) {
    setText(e.target.value)

    console.log('saved to DB', text)
  }

  function handleSubmit(e){
    e.preventDefault();
   
  }


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='name' defaultValue={text} name='name' onChange={handleChange} />
      </form>
      <p>{text}</p>
    </div>
  );
}

export default App;
