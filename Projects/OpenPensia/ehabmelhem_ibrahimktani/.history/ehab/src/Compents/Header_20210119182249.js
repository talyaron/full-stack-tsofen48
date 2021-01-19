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
      <Avatar
        className="avatar"
        src="https://instagram.fsdv3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/125438654_373110843960499_4486130208098717291_n.jpg?_nc_ht=instagram.fsdv3-1.fna.fbcdn.net&_nc_ohc=NDUGeHQAneQAX8vOHAM&tp=1&oh=8500725c449de8a495c329240d76c4c5&oe=602E028F"
        alt="Ehab"
      />
      <h4>איהאב מלחם</h4>
    </div>
  );
}

export default Header;
