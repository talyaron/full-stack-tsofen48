import React,{useState,useEffect} from "react";
import "./ToolHistoryTakanonFutureDiv.css";
import Tooltip from 'react-tooltip-lite';

// const TOOL = {title:'כונוס הכנסת בזמן הפגרה',text:'הגשת דרישה ל יו"ר הכנסת על ידי 25 ח"כיים לכינוס  מליאה מיוחדת שתדון ב הצעה לסדר היום.'};
// const HISTORY=['15.7.19 הצעה לסדר היום בנושא: "הכישלון הלאומי המתמשך בקליטת יהודי אתיופיה"','10.7.19  הצעה לסדר היום בנושא: "הצורך הדחוף לבחון את המחדלים..'];
// const FUTURE=['22.8.19 הצעה לסדר היום בנושא: "תקצוב עמותות העוסקת בהנגשת מידע פרלמנטרי"'];
// const TAKANON={takanon:'כינוס הכנסת בתקופת הפוגרה(תיקונים מספר 107,121 ו-128)',text:'21. (א)  25 חברי הכנסת הדורשים לכנס את הכנסת בתקופת הפגרה , בהתאם לסעיף 9(ב) לחוק הכנסת , רשאים לפרט בדרישתם נושא אחד או שני נושאים ; יושב ראש הכנסת יעמיד את ..'};

export const ToolHistoryTakanonFutureDiv = () => {

  const [TOOL, setATOOL] = useState({});
  const [HISTORY, setHISTORY] = useState([]);
  const [FUTURE, setFUTURE] = useState([]);
  const [TAKANON, setTAKANON] = useState({});

  // useEffect(() => {

    
  //     fetch(`https://pensia-rema-hosen-backend.herokuapp.com/${window.location.search}`).then(response=>{
    
  //   return response.json()}).then(res=>{
     
  //     setArticlesDetails(res.articlesAboutDirector);
  //     setShowMoreInfoBtn(res.isAdmin);
     
  //   }) 

  // }, [])
 

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
