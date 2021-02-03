import './App.css';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import React,{useState,useEffect} from 'react';
=======
import React,{useState} from 'react';
>>>>>>> Stashed changes
=======
import React,{useState} from 'react';
>>>>>>> Stashed changes


//import components


function App() {
const [AllProfiles,SetAllProfiles] = useState([]);

<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
=======
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    method:'POST',
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify({searchtext})
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  })*/
  //getDataFromDB();}

=======
  })
}
>>>>>>> Stashed changes
=======
  })
}
>>>>>>> Stashed changes
  function sendDataToDB(){
 const name = document.getElementById('name').value;
 const age = document.getElementById('age').value;
 const SrcImage = document.getElementById('srcImage').value;
<<<<<<< Updated upstream
<<<<<<< Updated upstream
console.log(SrcImage)
=======

>>>>>>> Stashed changes
=======

>>>>>>> Stashed changes
 if(name !== null && age !== null){
fetch('/GetData',{
  method:'POST'
  ,headers:{
    "content-type":"application/json"
  },
<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
=======
  body:JSON.stringify({name,age,SrcImage})})
 }
>>>>>>> Stashed changes
=======
  body:JSON.stringify({name,age,SrcImage})})
 }
>>>>>>> Stashed changes
}
  
  return (
    <div className="App">
      <input id="name" type="text" placeholder="Enter Name" /><br/>
      <input id="age" type="number" placeholder="Enter Age" /><br/>
      <input id="srcImage" type="text" placeholder="Src image" /><br/>
      <button onClick={sendDataToDB}>Register</button>
      <br/><br/><br/><br/>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      <input id="Search" type="text" placeholder="Search" />
      <button onClick={SearchIt}>search</button>
    </div>
  )
=======
      <input id="Search" onChange={searchInput} type="text" placeholder="Search" />
    </div>
  );
>>>>>>> Stashed changes
=======
      <input id="Search" onChange={searchInput} type="text" placeholder="Search" />
    </div>
  );
>>>>>>> Stashed changes
}

export default App;
