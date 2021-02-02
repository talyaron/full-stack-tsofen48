import './App.css';
import React from 'react';


//import components


function App() {

  function handleSubmit(e){
    e.preventDefault();
    const name = e.target.children.name.value;
    e.target.children.name.value = '';
    const age = e.target.children.age.value;
    e.target.children.imgSrc.value = '';
    const imgSrc = e.target.children.imgSrc.value;
    e.target.children.age.value = '';

    const cat = {name:name, imgSrc:imgSrc, age:age};
    
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
        <input type='text' placeholder='imgSrc' name='imgSrc'></input>
        <input type='text' placeholder='age' name='age'></input>
        <input type='submit'></input>
      </form>
    </div>
  );
}

export default App;
