import React from "react";
import Logo from "./Images/OpenKenest_Logo.PNG";
import PersonIcon from "@material-ui/icons/Person";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <img src={Logo} />
      <div className="header__data">
        <h2>התחבר למערכת</h2>
        <PersonIcon fontSize="large" className="person" />
      </div>
      <div className="header__right">
        <h3>ח"כים וסיעות</h3>
        <h3>ועדות</h3>
        <h3></h3>
      </div>
    </div>
  );
}

export default Header;
