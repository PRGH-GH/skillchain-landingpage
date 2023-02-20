import React from 'react';
import "./MobileNavigation.scss";

function MobileNavigation() {
    return (
        <div className='MobileNavigation'>
            <div className='MobileNavigation__wrapper'>
                <a href='#' className='MobileNavigation__wrapper__link1'>Find Candidates</a>
                <a href='#' className='MobileNavigation__wrapper__link2'>Find Jobs</a>
                <button className='MobileNavigation__wrapper__button'>
                    <a href='#' target="_blank">Sign In</a>
                </button>
            </div>
        </div>
    );
}

export default MobileNavigation;