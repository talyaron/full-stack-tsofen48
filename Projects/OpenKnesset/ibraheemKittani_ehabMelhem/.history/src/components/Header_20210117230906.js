import React from "react";
import Logo from "./Images/OpenKenest_Logo.PNG";
import PersonIcon from '@material-ui/icons/Person';
function Header() {
  return (
    <div className="header">
      <img src={Logo} />
      <div className="header__data">
        <h2>התחבר למערכת</h2>
        
      </div>
    </div>
  );
}

export default Header;
