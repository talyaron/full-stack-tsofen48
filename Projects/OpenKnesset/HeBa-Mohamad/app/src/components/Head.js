
import './Head.css';

function Head(){

    
    return (
           <div>
            <div className="container">
                 <img src="https://oknesset.org/static/img/oknesset-logo.png" alt="heba"/>
                 <h>כנסת פתוחה</h>
                 
              </div>
            <div className="topnav">
                <a className="active-no" href="#">ח״כים וסיעות</a>
                <a className="active-no" href="#">ועדות</a>
                <a className="active" href="#">כלים פרלמנטריים</a>
                <a class="logo-image">
                    <img src="https://www.pngitem.com/pimgs/m/111-1114675_user-login-person-man-enter-person-login-icon.png" class="img-fluid" />
                    <a className="login_nav" href="#">התחבר למערכת</a>
                </a>
              </div>

              <div className="undernav">
                <a className="main_page" href="#">דפ הבית</a>
                <a className="split">/</a>
                <a className="current_page" href="#">כלים פרלמנטריים</a>
                <a className="logout" href="#">התנתק</a>
                <a className="split">|</a>
                <a className="maakav" href="#">לוח מעקב</a>
              </div>

              
              </div> 
    );

}

export default Head