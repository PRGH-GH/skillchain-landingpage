import React from "react";
import logo from "../Navbar/assets/skillChainLogoLight.svg";
import "./MobileNavbar.scss";

function MobileNavbar({ handleClick, isMobileMenuOpened }) {
  return (
    <div className="MobileNavbar">
      <div className="MobileNavbar__logo">
        <img alt="Logo" src={logo} />
      </div>
      <div
        className={`MobileNavbar__hamburger-menu ${
          isMobileMenuOpened ? "clicked" : ""
        }`}
        onClick={handleClick}
      >
        <span className="MobileNavbar__hamburger-menu__bar"></span>
        <span className="MobileNavbar__hamburger-menu__bar"></span>
        <span className="MobileNavbar__hamburger-menu__bar"></span>
      </div>
    </div>
  );
}

export default MobileNavbar;
