import './App.css';
import React, { useEffect, useState} from 'react';


//import components


function App() {

  const [kittens, setKittens] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    const name = e.target.children.name.value;
    e.target.children.name.value = '';

    const age = e.target.children.age.value;
    e.target.children.age.value = '';

    const image = e.target.children.image.value;
    e.target.children.image.value = '';

    const searchByName = e.target.children.searchByName.value;
    e.target.children.searchByName.value = '';

    const cat = {name:name,age:age,image:image};

    fetch('/search-by-name',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({searchByName})
    }).then(r=>r.json())
    .then(data=>setKittens(data.kittens))

    
    fetch('/send-kitten-name',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({cat})
    }).then(r=>r.json())
    .then(data=>console.log(data))
  }
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='kitten name' name='name'></input>
        <input type='text' placeholder='kitten age' name='age'></input>
        <input type='text' placeholder='kitten image' name='image'></input>
        <input type='submit'></input><br></br>
        <input type='text' name='searchByName'></input>
        {/* {kittens.map((kitten, index)=>{
          return(<p key={index}>{kitten.name}</p>)
        })
        } */}

      </form>
    </div>
  );
}

export default App;
