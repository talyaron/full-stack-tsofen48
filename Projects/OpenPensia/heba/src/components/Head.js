
import './Head.css';
import heba from './Screenshot_20181030-223624.jpg'

function Head(){

    
    return (
           <div>
            <div className="container">
                 <h>  בנק הפועלים</h>
                 <img src={heba} alt="heba"/>
                 
              </div>
             <div className="topnav">
             <a className="active" >סיכום פרטים</a>
             <a className="active-no" href="#news"> עוד מידע</a>
             <a className="active-no" href="#contact">ניתוני  הצבעה</a>
              </div>
              
              </div> 
    );

}

export default Head