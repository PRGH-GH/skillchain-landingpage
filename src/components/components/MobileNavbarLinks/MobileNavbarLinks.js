import React from "react";
import "./MobileNavbarLinks.scss";

function MobileNavbarLinks() {
  return (
    <div className="MobileNavbarLinks">
      <div className="MobileNavbarLinks__wrapper">
        <a href="/#" className="MobileNavbarLinks__wrapper__link1">
          Find Candidates
        </a>
        <a href="/#" className="MobileNavbarLinks__wrapper__link2">
          Find Jobs
        </a>
        <a href="/#" className="MobileNavbarLinks__wrapper__link3">
          Contact us
        </a>
        <a href="/#" className="MobileNavbarLinks__wrapper__button">
          Sign in
        </a>
      </div>
    </div>
  );
}

export default MobileNavbarLinks;
