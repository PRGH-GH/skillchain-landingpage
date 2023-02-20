import React from "react"
import "./Navbar.scss"


function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar__icon"></div>
        <div className="navbar__items">
            <a href="#" className="navbar__link">
                Find Candidates
            </a>
            <a href="#" className="navbar__link">
                Find Jobs
            </a>
            <a href="#" className="navbar__link">
                Contact Us
            </a>
            <a href="#" target="_blank">
                <button className="navbar__btn">
                    Sign In
                </button>
            </a>
        </div>
    </div>
  )
}

export default Navbar
