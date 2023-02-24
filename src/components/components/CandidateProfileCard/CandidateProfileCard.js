import React from "react";
import "./CandidateProfileCard.scss";

function CandidateProfileCard({ candidate }) {
  return (
    <>
      <div className="CandidateProfileCard">
        <div className="CandidateProfileCard__header">
          <img
            className="CandidateProfileCard__header__img"
            src={candidate.image}
            alt="Smiling face of a candidate"
          ></img>
          <div>
            <h3 className="CandidateProfileCard__header__name">
              {candidate.name}
            </h3>
            <p className="CandidateProfileCard__header__title">
              {candidate.title}
            </p>
          </div>
        </div>
        <div className="CandidateProfileCard__description">
          {candidate.description}
        </div>
        <ul className="CandidateProfileCard__tags">
          {candidate.tags.map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </ul>
        <a
          className="CandidateProfileCard__button"
          href="https://www.google.com"
          target="_blank"
          rel="noreferrer"
        >
          Hire Now
        </a>
      </div>
    </>
  );
}

export default CandidateProfileCard;
