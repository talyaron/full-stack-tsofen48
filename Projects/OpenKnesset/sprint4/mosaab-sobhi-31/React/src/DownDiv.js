import EachProfile from './EachProfile'
import React from "react";
import './eachProfile.css'

export default function DownDiv(props) {
    return (
        <ul dir='rtl' className='FullList'>
            <br/>
           <div className='tittleOfBars'> בחר/י שני דירקטורים רגילים</div>
            
            {props.Profiles.map( (e,index)=>{
                return  <EachProfile index={index} img={e.img} title={e.title} />
            })}
            </ul>
            
            )
        }
    

