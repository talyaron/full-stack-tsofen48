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

    fetch('/get-articles')
      .then(r => r.json())
      .then(articles => setArticles(articles))

    fetch('/get-nav-tabs')
      .then(r => r.json())
      .then(navTabs => setNavTabs(navTabs));

    fetch('/send-candidate-info', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ candidateName })
    })
      .then(r => r.json())
      .then(candidateInfo => setCandidateInfo(candidateInfo))

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