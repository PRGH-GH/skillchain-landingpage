import React from 'react'
import "./MobileNavigation.scss"

function MobileNavigation() {
    return (
        <div className='MobileNavigation'>
            <div className='MobileNavigation-wrapper'>
                <a href='#' className='MobileNavigation-wrapper__link1'>Find Candidates</a>
                <a href='#' className='MobileNavigation-wrapper__link2'>Find Jobs</a>
                <a href='#' target="_blank">
                    <button className='MobileNavigation-wrapper__button'>Sign In</button>
                </a>
            </div>
        </div>
    );
}

export default MobileNavigation