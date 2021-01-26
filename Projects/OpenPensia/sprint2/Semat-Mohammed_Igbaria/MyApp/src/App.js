import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DirectorInfo from './view/components/Director/DirectorInfo';
import News from './view/components/News/News';
import Summary from './view/components/Summary/Summary';
import SummaryD from './view/components/SummaryD/SummaryD';
import './App.css';

export default function App() {
  
  return (
    <div className="AppCont">
    {/* header */}
    <div className="appHeader">
     <DirectorInfo organization="בנק הפועלים" 
      img="https://images.globes.co.il/images/NewGlobes/big_image_800/2019/f800x392.2019213T094727.jpg"
      directorName="עיסאווי פריג" />
    </div>

{/* router */}
    <Router>
      <div className="myRouter">
        <nav>
          <ul>
            <li>
            {/* <a className="active"> */}
              <Link to="/">נתוני הצבעה</Link>
              {/* </a> */}
            </li>
            <li>
              <Link to="/about">עוד מידע</Link>
            </li>
            <li>
              <Link to="/users">סיכום פרטים</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    {/* AppCont /div */}
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return(
    <div className="info">

     <button className="informationButton">יש לך מידע? לחצ/י כאן</button>

     {recentNews.map((newNum, index) => {

        return (<News
          newsTitle={newNum.newsTitle}
          newsText={newNum.newsText}
          newsUrl={newNum.newsUrl} />)
        })
          }
     </div>
     )
}

function Users() {
  return(
  <div className="summaryDetails">

   <SummaryD/>
   
  </div>
  )
}

const recentNews=[
  {newsTitle:'ynet - כתבה ב',newsText:'כתבה על שיפור מכירות ובמחסני חשמך',newsUrl:''},
  {newsTitle:'ynet - כתבה ב',newsText:'כתבה על שיפור מכירות ובמחסני חשמך',newsUrl:''},
  // {newsTitle:'ynet - כתבה ב',newsText:'כתבה על שיפור מכירות ובמחסני חשמך',newsUrl:''},
  // {newsTitle:'ynet - כתבה ב',newsText:'כתבה על שיפור מכירות ובמחסני חשמך',newsUrl:''},
  {newsTitle:'ynet - כתבה ב',newsText:'כתבה על שיפור מכירות ובמחסני חשמך',newsUrl:''}
]
const summaryDetailes=[
  {sumTitle:'ניסיון תעסוקתי',sumText:['מנכ"ל פוקס','דירקטור קן השקעות','סמנכ"ל כספים מחסני חשמל','  אלוף משנה 2008']}
 
]