
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
  const [news, setNews] = useState([]);


  useEffect(() => {

    fetch('/users/get-director')
      .then(r => r.json())
      .then(data => {
        console.log(data.directorInfo)
        setDirector(data.directorInfo);
      })

      fetch('/users/get-news')
      .then(r => r.json())
      .then(data => {
          setNews(data.recentNews)
      })


  
  }, [])
//   function getAppDir(){
//     return new Promise((resolve, reject) => {
//       fetch('/users/get-director')
//           .then(r => r.json())
//           .then(data => {
//               if (data) {
//                   resolve(setDirector(data.directorInfo))
//               } else {
//                   reject('Errror!!!!!')
//               }
//           })
//   }
//   )
// }



  //  useEffect(() => {
      //function getAppNews(){
       // return new Promise((resolve, reject) => {
          // fetch('/users/get-news')
          //     .then(r => r.json())
          //     .then(data => {
          //         setNews(data.recentNews)
          //     })
     // }
     // )
   // }
 // }, [])

// async function getPage(){
//   try{
//     const appNews= await getAppNews();
//     const appDir= await getAppDir();
//   } catch(e){
//     console.error(e)
//   }
// }
// getPage();

  


 // }, [])

  const [summary, setSummary] = useState([]);

  useEffect(() => {
    fetch('/users/get-summary')
      .then(r => r.json())
      .then(data => {
        console.log(data.summaryDetailes)
        setSummary(data.summaryDetailes);
      })
  }, [])

  return (

    <div className="AppCont">

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
                <Link to="/myusers">סיכום פרטים</Link>
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
            <Route path="/myusers">
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
  return (<div></div>

  )
}

function Users() {
  return (
    <div className="summaryDetails">

      <SummaryD />

    </div>
  )
}

