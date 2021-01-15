import './ToDoCom.css'
import React,{useState} from "react"

function ToDoCom(props) {


    const [uniqID, setuiqID]  = useState(0);
    const [Counter, setCounter] = useState(0); 

    function newHandler(e){
      
      let NewCounter = Counter+1;
      setuiqID(NewCounter+ Math.random());
      if(document.getElementById("texrToDo").value!=="")
      {
       
      document.getElementById("txtul").innerHTML+="<li id ="+uniqID+">"+NewCounter+". "+
      document.getElementById("texrToDo").value+" </li>";
      document.getElementById("texrToDo").value="";
      setCounter(NewCounter); 
    }
    
     // console.log(NewCounter); 
    }

    return (
        <div className='ToDoCom'>
  
      <form> 
            <input type="text" id="texrToDo" placeholder="" />
            
      </form>
      <div className="container">
        <button id="btn" onClick={newHandler}>Add Item</button>
        <h5 id="Coutertxt">Items: {Counter}</h5></div>
        <ul id="txtul">
       
       </ul>
        
      </div>
    )
}



export default ToDoCom

