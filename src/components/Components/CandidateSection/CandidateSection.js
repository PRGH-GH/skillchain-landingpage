import React from 'react'
import "./CandidateSection.scss"
import ViewMoreIcon from "G:\kickStart\Project\skillchain-landingpage\icons\Vector.png"

function CandidateSection() {
  return (
    <div className='CandidateSection'>
        <div className='CandidateSection-wrapper'>
            <h2 className='CandidateSection-wrapper__title'>
                Meet Candidates
                <div className='CandidateSection-wrapper__title_rec'></div>
            </h2>
            <a href='#' className='CandidateSection-wrapper__viewmore_text'>
                View More
                <img className='CandidateSection-wrapper__viewmore_icon' src={ViewMoreIcon} />
            </a>
        </div>
    </div>
  )
}

export default CandidateSection