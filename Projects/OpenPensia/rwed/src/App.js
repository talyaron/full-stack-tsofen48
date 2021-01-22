
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
        <div >
        <h8 className="h8" >80%</h8>
        <p className="good"> נגד</p>
        </div>
        <div className="line"></div>
        <div >
        <h9 className="h9">20%</h9>
        <p className="bad" > בעד</p>
        </div>
      </div>
      <div>
        <br></br>
        <br></br>
      <h4 className="h4" >  מה הבחירה שלך?</h4>
 </div> 
 <div className="likedislike">
   <div>
   <img className="imglike" src="https://lh3.googleusercontent.com/9hVI_6XUczgXnL6EpMZsDMZqwV72Yt2hz8kA7o4zHyFP-NIqlAzrk1FkHDUzxjUSkAD5=s69"></img>
   <p className="badani" > בעד אני</p>
     </div>
     <div>
      <img className="imgdislike" src="https://lh3.googleusercontent.com/JdnDuzMGV77iMoUqtNUTk6RC4rfGAC4etWQbxN-FntctyUMjj5-0BlODCaM4qRxZPpYy=s72"></img>
      <p className="notbadani" > נגד אני</p>

</div>
 </div>
    </div>

  );

}

export default App;
