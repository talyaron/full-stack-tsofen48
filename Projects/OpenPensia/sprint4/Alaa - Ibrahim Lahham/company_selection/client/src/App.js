import './App.css';
import React, { useState, useEffect } from 'react';
//components
import Cards from './components/Cards.js';

//change font family



function App() {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {

    fetch('/get-companies')
      .then(r => r.json())
      .then(companies => setCompanies(companies));

  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='login-button'>
          <a className='login' href='#' target='_blank' > כניסה </a>
        </div>
        <div className='company-name'>
          על איזה חברה רוצים להשפיע ?
        </div>
      </header>

      <div className='content'>
        <Cards cards={companies} />
      </div>

    </div>
  );
}

export default App;
