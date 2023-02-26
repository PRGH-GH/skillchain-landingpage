import React from 'react';
import './CallToActionStepCard.scss';

function CallToActionStepCard() {
  return (
        <section className='container'>
                <div className='card'>  
                    <div className='num'>1</div>
                    <div className='title'>Create an account</div>
                    <div className='text'> Sign up for an account on the job posting site to start browsing and applying for job opportunities </div>
                </div> 
                <div className='arrow'></div>
                <div className='card'>
                    <div className='num'>2</div>
                    <div className='title'> Build your profile </div>
                    <div className='text'>Fill out your profile with relevant information about your experience, education, and skills to make a good first impression on potential employers</div>
                </div>
                <div className='arrow'></div>
                <div className='card'>
                    <div className='num'>3</div>
                    <div className='title'> Start Applying </div>
                    <div className='text'>find job postings that match your criteria and apply to those that interest you. You can also set up job alerts when maching job postings become available</div>
                </div>
        </section>
 
  );
}

export default CallToActionStepCard;
