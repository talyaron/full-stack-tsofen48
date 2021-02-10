
import './App.css';
import React, { useState, useEffect } from 'react';

///////////////////////////////////////////////////
import logo from './img/oknesset-logo.png';
import TrackingBoard from './components/TrackingBoard/TrackingBoard';
export default function App() {

  ///////////////////////////////////////////

  const [tracking, setTracking] = useState([]);

  useEffect(() => {
    fetch('/users/get-tracking')
      .then(r => r.json())
      .then(data => {
        console.log(data.trackingBorderList)
        setTracking(data.trackingBorderList);
      })
  }, [])

  return (
    <div className="Cont">
    {/* header */}
    <div id="app-header" class="container">
    <div class="row">
        <div id="logo" class="span4 clearfix">
            <h1><a href="/"><img src={logo} alt="oknesset-logo"/><span>כנסת פתוחה</span></a></h1>
        </div>
    </div>

    <ul class="nav nav-pills">
        <li id="nav-parties"><a href="/members/index.html">ח"כים וסיעות</a></li>
        <li id="nav-committees"><a href="/committees/index.html">ועדות</a></li>
        <li id="nav-committees"><a href="/committees/index.html">כלים פרלמנטריים</a></li>
    </ul>
</div>
{/* body */}


<section class="container">
    <ul class="breadcrumb">
        <li><a class="home-icon" href="/index.html">דף הבית</a> <span class="divider">/</span>
        </li>
        
    <li class="active">לוח מעקב</li>

    </ul>

    <div id="content-main" class="main">



    {tracking.map((trackNum, index) => {

return (<TrackingBoard
  trackDate={trackNum.trackDate}
  trackerName={trackNum.trackerName}
  trackTitle={trackNum.trackTitle} />)
})
  }



    </div>

</section>


    {/* footer */}
    <div id="app-footer">
    <div class="container">
        <div class="row">
            <nav class="span8">
                <ul class="nav nav-pills">
                    <li><a class="home-icon" href="/index.html">דף הבית</a></li>
                    <li><a href="/members/index.html">ח"כים וסיעות</a></li>
                    <li><a href="/committees/index.html">ועדות</a></li>
                </ul>
            </nav>
        </div>
        <div class="row about">
            <div class="span4">
                <div class="about-oknesset">
                    <h3>כנסת פתוחה הוא פרוייקט שמטרתו לחשוף את פעילות הכנסת לציבור</h3>
                </div>
            </div>
            
        </div>
        <div class="row">
            <div class="span12">                חלק מהזכויות שמורות. שימוש בנתונים מהאתר בכפוף לקרדיט
            </div>
        </div>
    </div>
</div>




    </div>
  );
}



// const trackingBorderList=[
//   {trackDate:'21.11.20',trackerName:'נאום בן דקה',trackTitle:'סגירת מרכולים בבני ברק'},
//   {trackDate:'22.11.20',trackerName:'דיון בעת פגרה',trackTitle:'מענק לעסקים הקורסים'}

// ]
