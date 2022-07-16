import React from "react";
import Logo from "../../assets/logo2.png";
import "./Header.css";

const Header = () => {
  return (
    <span>
      <img src={Logo} alt="header-logo" className="header__logo" />
    </span>
  );
};

export default Header;
