import React from "react";
import { staticCandidates } from "../../../state/models/staticCandidates";
import "./CandidateSection.scss";
import CandidateProfileCard from "./../CandidateProfileCard/CandidateProfileCard";
import ViewMoreIcon from "./../../assets/viewMoreIcon.svg";
import candidateImage from "./assets/candidateImage.svg";

function CandidateSection() {
  return (
    <div className="CandidateSection">
      <div className="CandidateSection__wrapper">
        <div className="CandidateSection__wrapper__title">
          <h2 className="CandidateSection__wrapper__title__text">
            Meet Candidates
            <div className="CandidateSection__wrapper__title__text__rec"></div>
          </h2>
          <div className="CandidateSection__wrapper__title__viewmore CandidateSection__wrapper__title__viewmore--top">
            <a
              href="/#"
              className="CandidateSection__wrapper__title__viewmore__text"
            >
              View More{" "}
              <img
                className="CandidateSection__wrapper__viewmore__icon"
                src={ViewMoreIcon}
                alt="view more link icon"
              />
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
          <div className="CandidateSection__wrapper__title__viewmore CandidateSection__wrapper__title__viewmore--bottom">
            <a
              href="/#"
              className="CandidateSection__wrapper__title__viewmore__text"
            >
              View More{" "}
              <img
                className="CandidateSection__wrapper__viewmore__icon"
                src={ViewMoreIcon}
                alt="view more link icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CandidateSection;
