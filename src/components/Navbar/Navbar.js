import React from "react"
import "./Navbar.scss"


function Navbar() {
  return (
    <div className="Navbar">
         <div className="navbar__left">
            <div className="navbar__icon"><img alt="Logo" src="assets/skillChain.svg"/></div>
        </div>
        <div className="navbar__right">
            <div className="navbar__links"><a href="#">Find Candidates</a></div>
            <div className="navbar__links"><a href="#">Find Jobs</a></div>
            <div className="navbar__links"><a href="#">Contact Us</a></div>
            <button className="navbar__btn" target="__blank">Sign In</button>
        </div>
    </div>
  );
}

export default Navbar;
