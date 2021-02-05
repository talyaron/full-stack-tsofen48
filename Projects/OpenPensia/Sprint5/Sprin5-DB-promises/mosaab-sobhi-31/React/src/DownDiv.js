import EachProfile from './EachProfile'
import React,{useEffect,useState} from "react";
import './eachProfile.css'

export default function DownDiv(props) {
    const [Profiles,setProfiles] = useState([]);
    useEffect(()=>{
        fetch('/profiles/GetProfs')
        .then(r=>r.json())
        .then(data=>{
            setProfiles(data);
        })
    })
    return (
        <ul /*onLoad={loadit}*/ dir='rtl' className='FullList'>
            <br/>
           <div className='tittleOfBars'> בחר/י שני דירקטורים רגילים</div>
            
            {Profiles.map( (e,index)=>{
                return  <EachProfile index={index} img={e.img} title={e.title} />
            })}
            </ul>
            
            )
        }
    

