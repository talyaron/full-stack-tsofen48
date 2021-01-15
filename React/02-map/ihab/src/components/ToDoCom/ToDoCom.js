import './ToDoCom.css'
import React,{useState} from "react"

function ToDoCom(props) {


    
    const [Counter, setCounter] = useState(0); 

    function newHandler(e){
      let NewCounter = Counter+1;
      if(document.getElementById("texrToDo").value!=="")
      {
      document.getElementById("ListTxt").innerHTML+="<br/>"+NewCounter+". "+
      document.getElementById("texrToDo").value;
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
        <h7 id="ListTxt"></h7> 
        </div>
    )
}



export default ToDoCom

