import './TwoComp.css'
import React,{useState} from "react"

function TwoComp(props) {

    const [Counter, setCounter] = useState(0); 

    function newHandler(e){
      let NewCounter = Counter+1;
      setCounter(NewCounter); 
     // console.log(NewCounter); 
    }

    return (
        <div className='TwoComp'>
        <h1>{props.nameOf}</h1>
        <p>{props.title}</p>
        <img alt="" src={props.img} />
        <button onClick={newHandler}>Number of Click {Counter}</button>
        </div>
    )
}



export default TwoComp

