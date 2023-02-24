import React from "react";
import { staticCandidates } from "../../../state/models/staticCandidates";
import "./CandidateSection.scss";
import CandidateProfileCard from "./../CandidateProfileCard/CandidateProfileCard";
import viewMoreIcon from "./../../assets/viewMoreIcon.svg";
import candidateImage from "./assets/candidateImage.svg";

function CandidateSection() {
  return (
    <div className="CandidateSection">
      <div className="CandidateSection__wrapper">
        <div className="CandidateSection__heading">
          <h2 className="CandidateSection__heading__text">
            Meet Candidates
          </h2>
          <a className="CandidateSection__viewMoreLink--top" href="/#">
            <span className="CandidateSection__viewMoreLink__text">
              View More
            </span>
            <span className="CandidateSection__viewMoreLink__icon">
              <img src={viewMoreIcon} alt="view more link icon" />
            </span>
          </a>
        </div>
        <div className="CandidateSection__cardContainer">
          {staticCandidates.map((candidate) => (
            <CandidateProfileCard
              candidate={{ ...candidate, image: candidateImage }}
              key={candidate.name}
            />
          ))}
        </div>
        <a className="CandidateSection__viewMoreLink--bottom" href="/#">
          <span className="CandidateSection__viewMoreLink__text">
            View More
          </span>
          <span className="CandidateSection__viewMoreLink__icon">
            <img src={viewMoreIcon} alt="view more link icon" />
          </span>
        </a>
      </div>
    </div>
  );
}
export default CandidateSection;
