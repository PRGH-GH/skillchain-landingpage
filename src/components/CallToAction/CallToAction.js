import React from 'react'
import CallToActionImage from './../../resources/CallToActionImage.jpg'
import './CallToAction.scss'


function CallToAction() {
    const TITLE = 'Unleash your potential with SkillChain'
    const CONTENT = 'SkillChain is a modern job search platform that connects job seekers with top employers to find the perfect match for job vacancies. It uses the latest technologies, including AI, to offer a personalized and efficient job search experience. SkillChain also provides continuous upskilling opportunities to help job seekers advance their careers and remain competitive in the job market. With SkillChain, job seekers can expect a smarter, faster, and more effective way to find their next career opportunity.'

    return (
        <div className='CallToAction'>
            <img src={CallToActionImage} alt='CallToActionImage' />
            <div className='actionText'>
                <h2>{TITLE}</h2>
                <div className='underLine' />
                <p>{CONTENT}</p>
            </div>


        </div>
    )
}

export default CallToAction
