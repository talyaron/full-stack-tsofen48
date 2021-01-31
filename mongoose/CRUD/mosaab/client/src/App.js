import './App.css';
import React,{useState} from 'react';


//import components


function App() {
const [AllProfiles,SetAllProfiles] = useState([]);

function getDataFromDB(){
  fetch('/SendData')
  .then(r=>r.json())
  .then(data=>{
    SetAllProfiles(data);
  })
}
function searchInput(){
  let searchtext = document.getElementById('Search').value;
  fetch('searchInput',{
    method:'POST',
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify({searchtext})
  })
}
  function sendDataToDB(){
 const name = document.getElementById('name').value;
 const age = document.getElementById('age').value;
 const SrcImage = document.getElementById('srcImage').value;

 if(name !== null && age !== null){
fetch('/GetData',{
  method:'POST'
  ,headers:{
    "content-type":"application/json"
  },
  body:JSON.stringify({name,age,SrcImage})})
 }
}
  
  return (
    <div className="App">
      <input id="name" type="text" placeholder="Enter Name" /><br/>
      <input id="age" type="number" placeholder="Enter Age" /><br/>
      <input id="srcImage" type="text" placeholder="Src image" /><br/>
      <button onClick={sendDataToDB}>Register</button>
      <br/><br/><br/><br/>
      <input id="Search" onChange={searchInput} type="text" placeholder="Search" />
    </div>
  );
}

export default App;
