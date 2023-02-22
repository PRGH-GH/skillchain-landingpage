import React from 'react';
import "./MobileNavigation.scss";

function MobileNavigation() {
    return (
        <div className='MobileNavigation'>
            <div className='MobileNavigation__wrapper'>
                <a href='#' className='MobileNavigation__wrapper__link1'>Find Candidates</a>
                <a href='#' className='MobileNavigation__wrapper__link2'>Find Jobs</a>
                <a href='#' className='MobileNavigation__wrapper__button'>Sign in</a>
            </div>
        </div>
    );
}

export default MobileNavigation;