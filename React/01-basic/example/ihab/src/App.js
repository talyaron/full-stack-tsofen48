//import logo from './logo.svg';
import './App.css';
import React from 'react';
import OneComp from './components/OneComp/OneComp'


function App() { //component
 
  const blocks = [{name: "aa", model:"dasd"},{name:"aa", model:"adsd"}]; 
  const listblock= blocks.map((block) => 
  <span>name{block.name} {block.model}</span> 
  ); 

  return (
    <OneComp />
  );
};


export default App;
