import './App.css';
import React, { useEffect, useState} from 'react';


//import components


function App() {

  const [kittens, setKittens] = useState([]);

  useEffect(()=>{
    fetch('/get-kittens')
    .then(r=>r.json())
    .then(data=>setKittens(data.kittens))
  },[])

  function handleSubmit(e){
    e.preventDefault();
    const name = e.target.children.name.value;
    e.target.children.name.value = '';

    fetch('/send-kitten-name',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({name})
    }).then(r=>r.json())
    .then(data=>console.log(data))
  }

  function getKittensByName(e) {
    e.preventDefault();
    const name = e.target.children.name.value;

    fetch('http://localhost:4321/get-kittens-by-name',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({name})
    }).then(r=>r.json())
    .then(data=>setKittens(data.kittens))
  }

  function getKittensByAge(e) {
    e.preventDefault();
    const age = e.target.children.age.value;

    fetch('http://localhost:4321/get-kittens-by-age',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({age})
    }).then(r=>r.json())
    .then(data=>setKittens(data.kittens))
  }
  
  return (
    <div className="App">
      <form onSubmit={getKittensByName}>
        <input type='text' placeholder='kitten name' name='name'></input>
      </form>
      <form onSubmit={getKittensByAge}>
        <input type='text' placeholder='kitten age' name='age'></input>
      </form>
      {kittens.map((kitten, index)=>{
          return(<p key={index}>{kitten.name}</p>)
        })
      }
    </div>
  );
}

export default App;
