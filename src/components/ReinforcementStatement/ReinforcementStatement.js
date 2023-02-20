import React from 'react';
import ReinforcementStatementImage from './assets/ReinforcementStatementImage.jpg';
import './ReinforcementStatement.scss';


function ReinforcementStatement() {
    return (
        <div className='ReinforcementStatement'>
            <img src={ReinforcementStatementImage} alt='ReinforcementStatement' />
            <div className='ReinforcementStatement__text'>
                <h2>Unleash your potential with SkillChain</h2>
                <div className='ReinforcementStatement__underLine' />
                <p>
                    SkillChain is a modern job search platform that connects job seekers with top employers to find the perfect match for job vacancies. It uses the latest technologies, including AI, to offer a personalized and efficient job search experience. SkillChain also provides continuous upskilling opportunities to help job seekers advance their careers and remain competitive in the job market. With SkillChain, job seekers can expect a smarter, faster, and more effective way to find their next career opportunity.
                </p>
            </div>
        </div>
    );
}

export default ReinforcementStatement;
