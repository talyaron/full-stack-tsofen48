import './OneComp.css'
import React from "react"

//Images for buttons
import imageAtid from "../OneComp/Images/buttons/atid.JPG";
import imageHist from "../OneComp/Images/buttons/history.JPG";
import takanon from "../OneComp/Images/buttons/takanon.JPG";
import ofer from "../OneComp/Images/buttons/Ofer.JPG";
import logo from "../OneComp/Images/buttons/Logo.JPG";
import logo2 from "../OneComp/Images/buttons/Logo2.JPG";


function OneComp(props) {
    return (
        <div class="content">
            <div className="relative001">
            <img  id ="imgLogo" src={logo} alt=""/>
      </div>
            <div className="relative0">
            <div className="hdr">
  <a id="logoID" className="logo">התחבר למערכת<img id="logo2" src={logo2} alt=""></img></a>
  <div className="header-right">
    <span class="active" href="#">ח"כים וסיעות</span>
    <span href="#contact">ועדות</span>
    <span href="#about">כלים פרלמנטריים</span>
  </div>
</div>
      </div>
      <div div className="relative01" >
      <div className="hdr">

  <div className="header-right1" id="hd">
    <a class="active">דף הבית /</a>
    <a >כלים פרלמנטריים/</a>
    <a >כינוס הכנסת בזמן הפוגה</a>
  </div>
</div>
      </div>
          <div className="relative">
           
           <div className="absolute1">
           
           <div className="absolute11">
           <img  id ="img1" src={takanon} alt=""/> 
           <p id="sub14"> <br/> נאומים בני דקה (תיקון מס 112)  
           51. (א) מתוך דף הפייסבוק של האקדמיה ללשון העברית: המילה סתם מוכרת לנו כבר מן המשנה, למשל אם של עבודה זרה
            </p>
            
            </div>
          </div>

          <div className="absolute2">
          <div className="absolute12">
           <p id="sub12">כנוס הכנסת בזמן הפגרה</p>
              <p id="sub13"><br/>שאלה לשר על עניין <a id="blu" href="#"> בתחום</a> תפקידו, אתה מפנה חבר כנסת 
              שאינו שר או סגן שר. התשובה לשאילתה תינתן <a  href="#" id="blu"> במליאת הכנסת</a>.
               תוך 21 ימים על השר להשיב </p>
          </div>
          </div>
          <div className="absolute3">
          
          <div className="absolute13">
          <img  id ="img3"src={imageHist} alt=""/>
          
          <p id="sub14"> <br/> נאומים בני דקה (תיקון מס 112)  
           51. (א) מתוך דף הפייסבוק של האקדמיה ללשון העברית: המילה סתם מוכרת לנו כבר מן המשנה, למשל אם של עבודה זרה
            </p>
          </div>
          <br/> 

          </div>

          <div className="absolute4">
            
              <div className="absolute14"> 
              <img  id ="img4"src={imageAtid} alt=""/> 
              <p id="sub14"> <br/> נאומים בני דקה (תיקון מס 112)  
           51. (א) מתוך דף הפייסבוק של האקדמיה ללשון העברית: המילה סתם מוכרת לנו כבר מן המשנה, למשל אם של עבודה זרה
            </p>
             </div>

          </div>
      </div>
        <div className="relative2">
        <img  id="img12"src={ofer} alt=""/>
        <div className="absolute21">

        <p id="oferlbl"> נושא הצעה לסדר </p>
        <input type="text" id="subjectlbl" name="subjectlbl" placeholder=""/>
        
        <p id="oferlbl2"> דברי החבר: </p>
        <textarea id="subjectTxt" name="subject" placeholder="" ></textarea>

        </div>
        <div className="absolute22">           
        <p id="oferlbl3"> חכים רלוונטיים </p>
        <select type="dropbox" size="7" id="drpbx1" name="drpbx1" placeholder="sadsad">
        <option id="op1"> </option>
        <option>אבי משה</option>
        <option>גרמן יעל</option>
        <option>דיין יעל</option>
        <option>דיכטר אבי</option>
        <option>דרעי מכלוף</option>
        <option>האוזר אבי</option>
        <option>הנגבי צחי</option>
        <option>1</option>
        <option>2</option>
        <option>1</option>
        <option>2</option>
        </select>
        <br></br>
        <button id="submitBtn">שלח</button>
        

      </div>
      </div>
      
      <div className="footer">
            <div className="hdr">
  
  <div className="header-right3">
    <span class="active" href="#"> דף הבית</span>
    <span>|</span>
    <span href="#contact">חכ"ים וסיעות</span>
    <span>|</span>
    <span href="#about">ועדות</span>
  </div>
</div>
      </div>
      </div >
      
    );
}

export default OneComp;

