import './App.css';
import React from 'react';
//components
import CandidateInfo from './components/CandidateInfo';
import Articles from './components/Articles.js';
import Button from './components/Button';
import NavigationBar from './components/NavigationBar';

function App() {

  const articles = [
    {
        title: 'עיסאווי פריג – ויקיפדיה',
        subTitle: 'הוא פוליטיקאי ערבי-ישראלי שכיהן כחבר הכנסת מטעם מפלגת מרצ',
        link: 'https://he.wikipedia.org/wiki/%D7%A2%D7%99%D7%A1%D7%90%D7%95%D7%95%D7%99_%D7%A4%D7%A8%D7%99%D7%92%27'
    },
    {
        title: 'עיסאווי פריג – ויקיפדיה',
        subTitle: 'הוא פוליטיקאי ערבי-ישראלי שכיהן כחבר הכנסת מטעם מפלגת מרצ',
        link: 'https://he.wikipedia.org/wiki/%D7%A2%D7%99%D7%A1%D7%90%D7%95%D7%95%D7%99_%D7%A4%D7%A8%D7%99%D7%92%27'
    },
    {
        title: 'עיסאווי פריג – ויקיפדיה',
        subTitle: 'הוא פוליטיקאי ערבי-ישראלי שכיהן כחבר הכנסת מטעם מפלגת מרצ',
        link: 'https://he.wikipedia.org/wiki/%D7%A2%D7%99%D7%A1%D7%90%D7%95%D7%95%D7%99_%D7%A4%D7%A8%D7%99%D7%92%27'
    },
    {
        title: 'עיסאווי פריג – ויקיפדיה',
        subTitle: 'הוא פוליטיקאי ערבי-ישראלי שכיהן כחבר הכנסת מטעם מפלגת מרצ',
        link: 'https://he.wikipedia.org/wiki/%D7%A2%D7%99%D7%A1%D7%90%D7%95%D7%95%D7%99_%D7%A4%D7%A8%D7%99%D7%92%27'
    },
    {
        title: 'עיסאווי פריג – ויקיפדיה',
        subTitle: 'הוא פוליטיקאי ערבי-ישראלי שכיהן כחבר הכנסת מטעם מפלגת מרצ',
        link: 'https://he.wikipedia.org/wiki/%D7%A2%D7%99%D7%A1%D7%90%D7%95%D7%95%D7%99_%D7%A4%D7%A8%D7%99%D7%92%27'
    },
    {
        title: 'עיסאווי פריג – ויקיפדיה',
        subTitle: 'הוא פוליטיקאי ערבי-ישראלי שכיהן כחבר הכנסת מטעם מפלגת מרצ',
        link: 'https://he.wikipedia.org/wiki/%D7%A2%D7%99%D7%A1%D7%90%D7%95%D7%95%D7%99_%D7%A4%D7%A8%D7%99%D7%92%27'
    }
  ];

  return (
    <div className='App'>
      <header className='App-header'>
        <CandidateInfo candidateInfo={candidateInfo}/>
        <NavigationBar tabs={tabs} />
      </header>
      <Button className='add-info-btn' content='יש לך מידע? לחצ/י כאן' href='#' />
      <Articles articles={articles} />
    </div>
  );
}

export default App;

const tabs = [
  {
    className: 'non-active-nav',
    href: '#',
    content: 'סיכום פרטים'
  },
  {
    className: 'active-nav',
    href: '#',
    content: 'עוד מידע'
  },
  {
    className: 'non-active-nav',
    href: '#',
    content: 'נתוני הצבעה'
  }
];
const candidateInfo = {
  name: "עיסאווי פריג'",
  imgSrc: "https://www.lego.com/cdn/cs/set/assets/blt0bf03ae97678db52/Batman2_App_Sidekick-Tall1.jpg?fit=crop&format=jpg&quality=80&width=800&height=600&dpr=1",
  companyName: 'בנק הפועלים'
};