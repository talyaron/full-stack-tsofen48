import React from 'react'
import './alert.css'
export default function Alert(props) {
  function removebar(){
    document.getElementById('alertMessage').style.display='none';
  }
  function loadit(){
    document.getElementById('alertMessage').style.display='block';

  }
    return (
        <div onLoad={loadit}  id="alertMessage" class={props.messageKind}>
          <span class="closebtn" onClick={removebar}>&times;</span> 
          <strong> {props.strongSentence} </strong> {props.regularSentence}
        </div>
    )
}
