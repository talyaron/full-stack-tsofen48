import React from 'react'
import './kenest.css'
export default function Kenest(props) {
    return (
        <div className="effect2"  id="eachBarDiv" dir="rtl" >
            <div className="letsPadding" id="date">{props.date} {props.name}</div>

            <div className="letsPadding" id="tittle"><h2>{props.tittle} </h2></div>

            <div className="letsPadding" id="dateOfSubmit">תאריך הגשה: {props.dateOfSubmit}</div>
            <div className="letsPadding" id="editFrom"> אומץ על ידי: {props.editFrom}</div>
            <div className="letsPadding" id="readInPlenary">הוקרא במליאה: {props.readInPlenary}</div>

           <div id="ContentDiv">
               <div className="letsPadding" id="contentTittle"> <h1>תוכן:</h1></div>
            <div className="letsPadding" id="content">{props.content}</div>
           </div>
        </div>
    )
}
