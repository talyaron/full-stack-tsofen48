
import './App.css';
import React, { useState, useEffect } from 'react';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DirectorInfo from './components/Director/DirectorInfo';
import News from './components/News/News';
import SummaryD from './components/SummaryD/SummaryD';

function App() {


  ///////////////////////////////////////////
  const [director, setDirector] = useState([]);

  useEffect(() => {
    fetch('/get-director')
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setDirector(data);
      })
  }, [])

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('/get-news')
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setNews(data);
      })
  }, [])

  return (
    
        <div className="AppCont">
    {/* header */}
    {/* <div className="appHeader">
     <DirectorInfo organization="בנק הפועלים" 
      img="https://images.globes.co.il/images/NewGlobes/big_image_800/2019/f800x392.2019213T094727.jpg"
      directorName="עיסאווי פריג" />
    </div> */}
    <div className="appHeader">
    {director.map((newDir, index) => {

return (<DirectorInfo organization={newDir.organization} 
  img={newDir.img}
  directorName={newDir.directorName} />)
})
  }

     
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
          <div className="info">

<button className="informationButton">יש לך מידע? לחצ/י כאן</button>

{news.map((newNum, index) => {

   return (<News
     newsTitle={newNum.newsTitle}
     newsText={newNum.newsText}
     newsUrl={newNum.newsUrl} />)
   })
     }
</div>

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
};


export default App;

////////////////////////////////////

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return(<div></div>

     )
}

function Users() {
  return(
  <div className="summaryDetails">

   <SummaryD/>
   
  </div>
  )
}

const summaryDetailes=[
  {sumTitle:'ניסיון תעסוקתי',sumText:['מנכ"ל פוקס','דירקטור קן השקעות','סמנכ"ל כספים מחסני חשמל','  אלוף משנה 2008']}
 
]