import React from "react";
import Logo from "./Images/OpenKenest_Logo.PNG";
import PersonIcon from "@material-ui/icons/Person";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <img src={Logo} />
      <div className="header__info">
        <div className="header__right">
          <h3 className="item">ח"כים וסיעות</h3>
          <h3 className="item">ועדות</h3>
          <h3 className="item active">כלים פרלמנטרים</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
