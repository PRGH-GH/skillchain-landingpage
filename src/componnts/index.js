import React, { useState } from 'react';
import { HiArrowSmRight } from 'react-icons/hi';
import './style.css';


function Cards () {
    const [cards] = useState ([
    {
    num: 1,
    title: 'Create an account', 
    text: ' Sign up for an account on the job posting site to start browsing and applying for job opportunities'
    },
    { 
    num: 2,
    title: 'Build your profile', 
    text: ' Fill out your profile with relevant information about your experience, education, and skills to make a good first impression on potential employers '
    },
    {    
    num: 3,
    title: 'Start Applying', 
    text: ' find job postings that match your criteria and apply to those that interest you. You can also set up job alerts when maching job postings become available '
    }
    
    ])

  return (
    <div>
     <section>
        <div className='container'>
            <h1> Cards</h1>
            
            <div className='cards'>
                {
                    cards.map((card, i) => (

                <div  key={i} className='card'>
                    <span className='step'> { card.num } </span>
                    
                     <h3 className='title'> { card.title } </h3> 
                     <HiArrowSmRight className='icon' /> 
                     
                    <p className='text'> { card.text } </p>
                    
                    
                </div>   
                 ))}
                 
            </div> 
        </div>
       
     </section>
    </div>
  )
}

export default Cards;
// HiArrowSmRight  BsArrowRight    TbArrowNarrowRight