import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { DB } from './controlers/firebase';

function App() {
  const [tests, setTests] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {

    DB.collection('test').onSnapshot(testsDB => {
      const testsArr = []
      testsDB.forEach(testDB=>{
        console.log()
        testsArr.push(testDB.data())
      })
      setTests(testsArr)
    })
  }, [])

  function handleClick() {
    DB.collection('test').add({ hello: text, date: new Date() });

  }

  function handleInput(e){
    setText(e.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input type='text' placeholder='Enter text' defaultValue={text} onKeyUp={handleInput} />
        <button onClick={handleClick} >
          Learn React
        </button>
        {tests.map((test, i)=>{
          return <p key={i}>{test.hello}</p>
        })}
      </header>
    </div>
  );
}

export default App;
