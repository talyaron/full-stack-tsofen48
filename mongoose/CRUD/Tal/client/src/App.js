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
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='kitten name' name='name'></input>
        {kittens.map((kitten, index)=>{
          return(<p key={index}>{kitten.name}</p>)
        })
        }
      </form>
    </div>
  );
}

export default App;
