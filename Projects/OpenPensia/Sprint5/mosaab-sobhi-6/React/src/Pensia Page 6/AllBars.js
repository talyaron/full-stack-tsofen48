import React,{useState,useEffect} from 'react'
import EachBar from './EachBar'
import './eachBarStyle.css'


export default function AllBars(props){
    const [barsArr,setBarsArr] = useState([]);
    useEffect(()=>{
        fetch('/getAllCharactors')
        .then(r=>r.json())
        .then(data=>{
            setBarsArr(data);
        })
    })
    return (
        <div>
        <ul key="ListBars" id="ListBars">
            <a key="loginPageA" id="loginPageA"  href="LoginPage">כניסה</a>
            <br/>
            <br/>
            <p id="tittleInBars" className="text-center">על איזו חברה תרצה/י להשפיע?</p>
         {barsArr.map( (e , index) => {
            return  <EachBar index={index} imageSource={e.imageSource}  tittle={e.tittle} description={e.description} /> 
          })}
        </ul>
        </div>
    )
}
