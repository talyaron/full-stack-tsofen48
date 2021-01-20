
import './Head.css';


function Head(){

    
    return (
           <div>
            <div className="container">
                 <h>  בנק הפועלים</h>
                 <img src="https://headstart.co.il/image/oknesset-logo(4).png" alt="heba"/>
                 
              </div>
            
               <div className="topnav">
               <a className="active" href="#home">Home</a>
                <a className="active-no" href="#news">News</a>
                <a className="active-no" href="#contact">Contact</a>   
                {/* https://e7.pngegg.com/pngimages/971/990/png-clipart-computer-icons-login-person-user-pessoa-smiley-desktop-wallpaper.png */}
                {/* <img className="imgdes" src="https://e7.pngegg.com/pngimages/971/990/png-clipart-computer-icons-login-person-user-pessoa-smiley-desktop-wallpaper.png" alt="heba"/> */}
              </div>
              
              </div> 
    );

}

export default Head