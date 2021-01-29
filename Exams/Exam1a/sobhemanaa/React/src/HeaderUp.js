import React from "react";
import './HeaderUp.css'

const backbutton='>'
let precent=100;
function HeaderUp(props) {
    function cal()
    {
        precent=precent-25;
    }
    return (
        <div className='HeaderUp'>
            <div className='backbutton'>{backbutton}</div>
            <br/>
           <div className='tittleCompany'> {props.titleName}</div>
           <br/>
            <br/>

            <div className='precent'>{props.precent=100} <br/></div>
            <img className='giftlogo' src={props.img} />
            <button onclick="cal()" className='giftlogo'  >add </button>
            <img className='giftlogo' src={props.img} />
            <button onclick="cal()" className='giftlogo'  >add </button>
            <img className='giftlogo' src={props.img} />
            <button onclick="cal()" className='giftlogo'  >add </button>
            <img className='giftlogo' src={props.img} />
            <button onclick="cal()" className='giftlogo'  >add </button>
           <div className='title'> {props.title}</div>
           
           
           <br/>
        </div>
       
    )
}

export default HeaderUp

