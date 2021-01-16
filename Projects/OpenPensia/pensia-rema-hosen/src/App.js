
import React, { useState } from 'react';
import'./App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  const [detailsPressed, setdetailsPressed] = useState(false);
  const [exDetailsPressed, setexDetailsPressed] = useState(false);
  const [votePressed, setvotePressed] = useState(false);
  function clickDetailsTap() {
    setdetailsPressed(!detailsPressed)
    setexDetailsPressed(false)
    setvotePressed(false)
  }
  function clickExtDetailsTap() {
    setdetailsPressed(false)
    setexDetailsPressed(!exDetailsPressed)
    setvotePressed(false)
  }
  function clickVoteTap() {
    setdetailsPressed(false)
    setexDetailsPressed(false)
    setvotePressed(!votePressed)
  }
  return (<div className='container'>
    <div className='header'><div className='imgContainer'><img className='profileImg' src='https://photof8.com/wp-content/uploads/2016/10/FutureAst007-2.jpg'></img><h3>עיסאווי פריג</h3></div></div>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link onClick={clickDetailsTap} className={detailsPressed ? 'pressed-a' : 'not-pressed-a'} to="/details">סיכום פרטים</Link>
            </li>
            <li>
              <Link onClick={clickExtDetailsTap} className={exDetailsPressed ? 'pressed-a' : 'not-pressed-a'} to="/extraDetails">עוד מידע</Link>
            </li>
            <li>
              <Link onClick={clickVoteTap} className={votePressed ? 'pressed-a' : 'not-pressed-a'} to="/vote">ניתוני הצבעה</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/extraDetails">
            <ExtraDetails />
          </Route>
          <Route path="/vote">
            <Vote />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
        </Switch>
      </div>
    </Router>
    </div> );
}

function Details() {
  return <div className='textContainer'><div className='paragraph-1'><h4>נסיון תעסוקתי</h4><p>מנכ"ל פוקס</p>
   <div className='button-container-row-1'><button><span>בהווה</span></button></div><p>
    דירקטור קו השקעות</p>
    <div className='button-container-row-2'><button><span>בהווה</span></button></div>
    <p>סמנכ"ל כספים מחסני חשמל</p><p> אלוף משנה 8200</p></div>
    <div className='paragraph-2'><h4>מומחיות פיננסית</h4><p>יש מומחיות</p></div>
    <div className='paragraph-3'><h4>השכלה</h4><p>לימודי משפטים, אוניברסיטת בר אילן</p><p>קורס ברמנים, בר מאסטר</p><p>לימודי דת ורוח, האוניברסיטה הפתוחה</p></div>
    <div className='paragraph-4'><h4>ניגוד עניינים</h4><p>אין</p></div>
    <div className='paragraph-5'><h4>קרוב משפחה של בעל שליטה</h4><p>בן דוד של מנכ"ל הראל פיננסים</p></div>
    <div className='linkedin-buttonContainer'><button><span>צפייה בנתונים בלינקדאין</span></button></div>
    </div>;
}

function ExtraDetails() {
  return <h2></h2>;
}

function Vote() {
  return <h2></h2>;
}