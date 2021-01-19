import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__text">
        <h4>בנק הפועלים</h4>
        <ChevronRightIcon />
      </div>
      <Avatar className="avatar" alt="Ehab" />
      <h4>איהאב מלחם</h4>
    </div>
  );
}

export default Header;
