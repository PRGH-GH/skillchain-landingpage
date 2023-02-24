import React from 'react'
import "./CandidateSection.scss"
import ViewMoreIcon from "./../../assets/viewMoreIcon.svg"

function CandidateSection() {
  return (
    <div className='CandidateSection'>
        <div className='CandidateSection__wrapper'>
          <div className='CandidateSection__wrapper__title'>
            <h2 className='CandidateSection__wrapper__title__text'>
                  Meet Candidates
                  <div className='CandidateSection__wrapper__title__text__rec'></div>
              </h2>
              <div className='CandidateSection__wrapper__title__viewmore CandidateSection__wrapper__title__viewmore--top'>
                <a href='#' className='CandidateSection__wrapper__title__viewmore__text'>
                    View More {" "} 
                    <img className='CandidateSection__wrapper__viewmore__icon' src={ViewMoreIcon} />
                </a>
              </div>
              {/** Insert cards here */}
              <div className='CandidateSection__wrapper__title__viewmore CandidateSection__wrapper__title__viewmore--bottom'>
                <a href='#' className='CandidateSection__wrapper__title__viewmore__text'>
                    View More {" "} 
                    <img className='CandidateSection__wrapper__viewmore__icon' src={ViewMoreIcon} />
                </a>
              </div>
          </div>
        </div>
    </div>
  )
}
export default CandidateSection
