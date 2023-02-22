import React from 'react'
import "./CandidateSection.scss"
import ViewMoreIcon from "./../../assets/viewMoreIcon.png"

function CandidateSection() {
  return (
    <div className='CandidateSection'>
        <div className='CandidateSection__wrapper'>
            <h2 className='CandidateSection__wrapper__title'>
                Meet Candidates
                <div className='CandidateSection__wrapper__title__rec'></div>
            </h2>
            <div className='CandidateSection__wrapper__viewmoretop'>
              <a href='#' className='CandidateSection__wrapper__viewmoretop__text'>
                  View More {" "}
                  <img className='CandidateSection__wrapper__viewmoretop__icon' src={ViewMoreIcon} />
              </a>
            </div>
        </div>
    </div>
  )
}

export default CandidateSection