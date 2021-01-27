import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "./Header.css";
function Header({ company, Icon, name }) {
  return (
    <div className="header">
      <div className="header__text">
        <h4>{company}</h4>
        <ChevronRightIcon />
      </div>
      <Avatar className="avatar" src={Icon} alt="Ehab" />
      <h4>{name}</h4>
</div>

export default Header;
