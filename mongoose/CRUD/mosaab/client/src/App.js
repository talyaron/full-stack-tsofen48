import './App.css';
import React,{useState,useEffect} from 'react';


//import components


function App() {
const [AllProfiles,SetAllProfiles] = useState([]);

/*function getDataFromDB(){
fetch('/searchInput').then(r=>r.json()).then(data => console.log(data))
}*/

/*useEffect(()=>{
  fetch('/searchInput')
  .then(r=>r.json())
  .then(data=>console.log(data))
},[])*/


/*function searchInput(){
  let searchtext = document.getElementById('Search').value;
  fetch('/searchInput',{
    method:'POST',
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify({searchtext})
  })*/
  //getDataFromDB();}

  function sendDataToDB(){
 const name = document.getElementById('name').value;
 const age = document.getElementById('age').value;
 const SrcImage = document.getElementById('srcImage').value;
console.log(SrcImage)
 if(name !== null && age !== null){
fetch('/GetData',{
  method:'POST'
  ,headers:{
    "content-type":"application/json"
  },
  body:JSON.stringify({name,age,SrcImage})
}).then(r=>r.json()).then(data=>console.log(data))
 }

}
function SearchIt(){
  let searchtext = document.getElementById('Search').value;
  fetch('/searchInput',{
    method:'GET',
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify({searchtext})
  }).then(r=>r.json()).then(data=>{
    console.log(data)
  })
}
  
  return (
    <div className="App">
      <input id="name" type="text" placeholder="Enter Name" /><br/>
      <input id="age" type="number" placeholder="Enter Age" /><br/>
      <input id="srcImage" type="text" placeholder="Src image" /><br/>
      <button onClick={sendDataToDB}>Register</button>
      <br/><br/><br/><br/>
      <input id="Search" type="text" placeholder="Search" />
      <button onClick={SearchIt}>search</button>
    </div>
  )
}

export default App;
