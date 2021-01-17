import React from "react";
import Logo from "./Images/OpenKenest_Logo.PNG";
function Header() {
  return (
    <div className="header">
      <img src={Logo} />
      <div className="header__data">
        <h2>התחבר למערכת</h2>
        import PersonIcon from '@material-ui/icons/Person';
      </div>
    </div>
  );
}

export default Header;
