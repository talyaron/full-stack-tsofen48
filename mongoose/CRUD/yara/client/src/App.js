import './App.css';
import React from 'react';


//import components


function App() {
  function handleSubmit(e){
<<<<<<< HEAD
<<<<<<< HEAD
    e.preventDefault();
=======
    /*e.preventDefault();
>>>>>>> main
=======
    /*e.preventDefault();
>>>>>>> main
    const name = e.target.children.name.value;
    e.target.children.name.value = '';
    
    fetch('/send-kitten-name',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({name})
    }).then(r=>r.json())
<<<<<<< HEAD
<<<<<<< HEAD
    .then(data=>console.log(data))
=======
    .then(data=>console.log(data))*/
>>>>>>> main
=======
    .then(data=>console.log(data))*/
>>>>>>> main
  }
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='kitten name' name='name'></input>
      </form>
    </div>
  );
}

export default App;
