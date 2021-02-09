import './App.css';
import React, { useEffect, useState } from 'react';
//components
import CandidateInfo from './components/CandidateInfo';
import Articles from './components/Articles.js';
import Button from './components/Button';
import NavigationBar from './components/NavigationBar';

let candidateName = 'עיסאווי';

function App() {

  const [articles, setArticles] = useState([]);
  const [navTabs, setNavTabs] = useState([]);
  const [candidateInfo, setCandidateInfo] = useState([]);

  useEffect(() => {

    fetch('/articles/get-Articles')
      .then(r => r.json())
      .then(articles => {
        if(articles.success!==false)
       { console.log("am in"); setArticles(articles.articles)}
      }
        );

    fetch('/navTabs/get-NavTabs')
      .then(r => r.json())
      .then(navTabs =>{ 
        if(navTabs.success!==false)
          {  console.log("am in");setNavTabs(navTabs.navTabs);}
      });

      fetch('/candidate/get-CandidateInfo')
      .then(r => r.json())
      .then(candidateInfo =>{
        if(candidateInfo.success!==false){
          console.log("am in");
         setCandidateInfo(candidateInfo[0])
        }else{
          alert(candidateInfo.err);
        }
        });


  //  fetch('/candidate/get-CandidateInfo', {
 //     method: 'POST',
  //    headers: { 'Content-Type': 'application/json' },
  //    body: JSON.stringify({ candidateName })
   // })
   //   .then(r => r.json())
    //  .then(candidateInfo => console.log(candidateInfo.candidateInfo))

  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <CandidateInfo candidateInfo={candidateInfo} className='candidate-info' />
        <NavigationBar navTabs={navTabs} />
      </header>
      <Button className='add-info-btn' content='יש לך מידע? לחצ/י כאן' href='#' />
      <Articles articles={articles} />
    </div>
  );
}

export default App;