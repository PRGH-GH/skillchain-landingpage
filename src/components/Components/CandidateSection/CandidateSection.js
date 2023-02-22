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
            <div className='CandidateSection__wrapper__viewmore CandidateSection__wrapper__viewmore--top'>
              <a href='#' className='CandidateSection__wrapper__viewmore__text'>
                  View More {" "} top
                  <img className='CandidateSection__wrapper__viewmore__icon' src={ViewMoreIcon} />
              </a>
            </div>
            {/** Insert cards here */}
            <div className='CandidateSection__wrapper__viewmore CandidateSection__wrapper__viewmore--bottom'>
              <a href='#' className='CandidateSection__wrapper__viewmore__text'>
                  View More {" "} bottom
                  <img className='CandidateSection__wrapper__viewmore__icon' src={ViewMoreIcon} />
              </a>
            </div>
        </div>
    </div>
  )
}

export default CandidateSection