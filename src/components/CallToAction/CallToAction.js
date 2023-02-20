import React from 'react'
import './CallToAction.scss'


function CallToAction() {
    return (
        <div className='CallToAction'>
            <h2>Let's Get Started!</h2>
            <div className='underLine' />
            <div>
                <p>Select your role:</p>

                <div className='toggleSwitch'>
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider"></span>
                    </label>               
                </div>

            </div>

        </div>
    )
}

export default CallToAction
