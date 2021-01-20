
import './App.css';
import Shape from './view/components/Card/Shape';

import React, { Component } from 'react';
import { Button, Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
function uniqueId() {
  return "id" + Math.random().toString(16).slice(2)
}



function App() {



  return (
    <div className="App">
      <header>
        <div className="bank">
          <br></br>
          <h5> בנק פועלים</h5>
        </div>
        <br></br>
        <div className="photo">
          <img className="photo" src="https://scontent.ftlv2-1.fna.fbcdn.net/v/t1.0-9/90010299_2914010441999034_707703609860554752_o.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=IGHDy-iLumUAX_-rqzx&_nc_ht=scontent.ftlv2-1.fna&oh=ee8d8ca310701a98de6f2c3737e516cd&oe=602E41A0" alt="Avatar" />
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
              <Nav style={{ color: "#324483" }} href="/home" >נתוני הצבעה</Nav>
            </Nav.Item>
          </Nav>
        </div>
        <div>
          <Nav >
            <Nav.Item >
              <Nav eventKey="link-1" disabled > עוד מידע </Nav>
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
      <div className="likeunlike">
        <h8 className="h8" >80%</h8>
        <div className="line"></div>
        <h8 className="h8" >    20%</h8>
      </div>
      <div>
      <h4 className="h4" >  מה הבחירה שלך?</h4>
 </div> 
 <div className="likedislike">
   <img className="likedislike" src="data:image/png;base64,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"></img>
      <img className="likedislike" src="https://www.xadara.com/wp-content/uploads/2015/08/052512dislikefix_1280x7201.jpg"></img>

 </div>
    </div>

  );

}

export default App;
