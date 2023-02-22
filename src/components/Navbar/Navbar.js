import React from "react"
import "./Navbar.scss"


function Navbar() {
  return (
    <div className="Navbar">
        <div className="Navbar__left">
            <div className="Navbar__icon"><img alt="Logo" src="./../../assets/skillChain.svg"/></div>
        </div>
        <div className="Navbar__right">
            <div className="Navbar__links"><a href="#">Find Candidates</a></div>
            <div className="Navbar__links"><a href="#">Find Jobs</a></div>
            <div className="Navbar__links"><a href="#">Contact Us</a></div>
            <button className="Navbar__btn" target="__blank">Sign In</button>
        </div>
    </div>
  );
}

export default Navbar;
