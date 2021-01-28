import './App.css';


import React, { Component } from 'react';
import { Button, Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
//components
import Icon from './components/Icon.js';


function App() {
  return (
  <div className="App">
    <header>
      <div className="bank">
        <br></br>
        <h5> בנק פועלים</h5>
      </div>
      <div className="photo">
        <img className="photo" src="https://ichef.bbci.co.uk/news/640/cpsprodpb/A25E/production/_116266514_mediaitem116266511.jpg" alt="Avatar" />
      </div>
      <br></br>
      <div className="proname">
        <h5>עיסאווי פריג’</h5>
      </div> 

    </header>
    <div class="navbar">


      <div>
        <Nav >
          <Nav.Item >
            <Nav  href="/home" >נתוני הצבעה</Nav>
          </Nav.Item>
        </Nav>
      </div>
      <div>
        <Nav >
          <Nav.Item >
            <Nav style={{ color: "#324483" }} eventKey="link-1" disabled > עוד מידע </Nav>
          </Nav.Item>
        </Nav>
      </div>


      <div>
        <Nav >
          <Nav.Item >
            <Nav eventKey="link2" disabled >סיכום פרטים</Nav>
          </Nav.Item>
        </Nav>
      </div>


    </div>
    <div className="btn">
          <a>יש לך מידע? לחצ/י כאן</a>
        </div>

    <div className="ctva">
      <h1 className="h1" >כתבה בynet</h1>
      <h2 className="h2" >כתבה על שיפור מכירות ובמחסני חשמל</h2>
      <a className="h3" href="#"> צפייה בכתבה</a>
    </div>
    <div className="line" ></div>
    <div className="ctva">
      <h1 className="h1" >כתבה בynet</h1>
      <h2 className="h2" >כתבה על שיפור מכירות ובמחסני חשמל</h2>
      <a className="h3" href="#"> צפייה בכתבה</a>
    </div>
    <div className="line" ></div>
    <div className="ctva">
      <h1 className="h1" >כתבה בynet</h1>
      <h2 className="h2" >כתבה על שיפור מכירות ובמחסני חשמל</h2>
      <a className="h3" href="#"> צפייה בכתבה</a>
    </div>
    <div className="line" ></div>
    <div className="ctva">
      <h1 className="h1" >כתבה בynet</h1>
      <h2 className="h2" >כתבה על שיפור מכירות ובמחסני חשמל</h2>
      <a className="h3" href="#"> צפייה בכתבה</a>
    </div>
    <div className="line" ></div>
    <div className="ctva">
      <h1 className="h1" >כתבה בynet</h1>
      <h2 className="h2" >כתבה על שיפור מכירות ובמחסני חשמל</h2>
      <a className="h3" href="#"> צפייה בכתבה</a>
    </div>
    <div className="line" ></div>
     <div className="ctva">
      <h1 className="h1" >כתבה בynet</h1>
      <h2 className="h2" >כתבה על שיפור מכירות ובמחסני חשמל</h2>
      <a className="h3" href="#"> צפייה בכתבה</a>
    </div>
    <div className="line" ></div>
    </div>

  );
}

export default App;
