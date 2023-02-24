import React, { useState } from "react";
import logo from "../Navbar/assets/skillChainLogoLight.svg";
import "./NavbarMobileLogoBar.scss";

function NavbarMobileLogoBar() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="NavbarMobileLogoBar">
      <div className="NavbarMobileLogoBar__logo">
        <img alt="Logo" src={logo} />
      </div>
      <div
        className={`NavbarMobileLogoBar__hamburger-menu ${
          isClicked ? "clicked" : ""
        }`}
        onClick={handleClick}
      >
        <span className="NavbarMobileLogoBar__hamburger-menu__bar"></span>
        <span className="NavbarMobileLogoBar__hamburger-menu__bar"></span>
        <span className="NavbarMobileLogoBar__hamburger-menu__bar"></span>
      </div>
    </div>
  );
}

export default NavbarMobileLogoBar;
