import React from 'react';
import CallToActionImage from './assets/CallToActionImage.jpg';
import './CallToAction.scss';


function CallToAction() {
    return (
        <div className='CallToAction'>
            <img src={CallToActionImage} alt='CallToActionImage' />
            <div className='CallToAction__text'>
                <h2>Unleash your potential with SkillChain</h2>
                <div className='CallToAction__underLine' />
                <p>
                    SkillChain is a modern job search platform that connects job seekers with top employers to find the perfect match for job vacancies. It uses the latest technologies, including AI, to offer a personalized and efficient job search experience. SkillChain also provides continuous upskilling opportunities to help job seekers advance their careers and remain competitive in the job market. With SkillChain, job seekers can expect a smarter, faster, and more effective way to find their next career opportunity.
                </p>
            </div>
        </div>
    );
}

export default CallToAction;
