import React,{useState,useEffect} from "react";
import "./ToolHistoryTakanonFutureDiv.css";
import Tooltip from 'react-tooltip-lite';


export const ToolHistoryTakanonFutureDiv = () => {

  const [TOOL, setATOOL] = useState({});
  const [HISTORY, setHISTORY] = useState([]);
  const [FUTURE, setFUTURE] = useState([]);
  const [TAKANON, setTAKANON] = useState({});

  useEffect(() => {

    fetch('/get-tool')
    .then(r=>r.json())
    .then(data=>setATOOL(data.TOOL))
  
    fetch('/get-history')
    .then(r=>r.json())
    .then(data=>setHISTORY(data.HISTORY))

    fetch('/get-future')
    .then(r=>r.json())
    .then(data=>setFUTURE(data.FUTURE))

    fetch('/get-takanon')
    .then(r=>r.json())
    .then(data=>setTAKANON(data.TAKANON))

  }, [])
 

    return (
        <div className='mainDiv'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div className='Parliamentary-tools-container'>
    {/* <div className='tool-1'><h1>כונוס הכנסת בזמן הפגרה</h1><p>הגשת דרישה ל&nbsp;<Tooltip className='tooltip'  place="top" effect='solid'><span>יו"ר הכנסת</span></Tooltip>&nbsp;על ידי 25 ח"כיים לכינוס&nbsp;<Tooltip className='tooltip'><span>מליאה</span></Tooltip>&nbsp;מיוחדת שתדון ב<Tooltip className='tooltip'><span>הצעה לסדר היום</span></Tooltip>&nbsp;.</p></div> */}
    <div className='tool-1'><h1>{TOOL.title}</h1><p>{TOOL.text}</p></div>
    <div className='tool-2'><div className='title'><icon class="fa fa-sticky-note-o icon"></icon><div className="vertical-line"></div><h6>תקנון</h6></div><h6>{TAKANON.takanon}</h6><p>{TAKANON.text}</p></div>
    <div className='tool-3'><div className='title'><icon class="fa fa-calendar-o icon"></icon><div className="vertical-line"></div><h6>עתיד</h6></div>
      {FUTURE.map((item, index) => {
         return ( <p>{item}</p> )
       }) }
    </div>
    <div className='tool-4'><div className='title'><icon class="fa fa-calendar icon"></icon><div className="vertical-line"></div><h6>היסטוריה</h6></div>
    {HISTORY.map((item, index) => {
         return ( <p>{item}</p> )
       }) }
    </div>
  </div></div>
    )
}
export default ToolHistoryTakanonFutureDiv ;
