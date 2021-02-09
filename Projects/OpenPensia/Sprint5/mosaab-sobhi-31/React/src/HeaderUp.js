import React from "react";
import './HeaderUp.css'

const backbutton='>'
function HeaderUp(props) {
    
    return (
        <div className='HeaderUp'>
            <div className='backbutton'>{backbutton}</div>
            <br/>
           <div className='tittleCompany'> {props.titleName}</div>
           <br/>
            <br/>
            <div className='precent'>{props.precent} <br/></div>
           <div className='title'> {props.title}</div>
           <div className='chooseTittle'>תבחר/י מי יהיו הדרקטורים {props.titleName} </div>
           <br/>
        </div>
       
    )
}

export default HeaderUp

