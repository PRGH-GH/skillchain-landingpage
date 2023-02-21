import React from 'react';
import './CandidateProfileCard.scss';
import CandidateImage from './assets/candidateImage.svg';
import { staticCandidateCards } from '../../state/models/staticCandidateCards';

function CandidateProfileCard(props) {
  const { candidate } = props;

  return (
    <>
      <div className="CandidateProfileCard">
        <div className="CandidateProfileCard__header">
          <img
            className="CandidateProfileCard__header__img"
            src={CandidateImage}
            alt="Smiling face of a candidate"
          ></img>
          <div>
            <h3 className="CandidateProfileCard__header__name">
              {staticCandidateCards.name}
            </h3>
            <p className="CandidateProfileCard__header__title">
              {staticCandidateCards.title}
            </p>
          </div>
        </div>
        <div className="CandidateProfileCard__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum
          justo id malesuada congue. Proin bibendum, diam a faucibus accumsan,
          sapien velit congue libero, id placerat velit velit et sapien.
        </div>
        <ul className="CandidateProfileCard__tags">
          <li>Skill tag</li>
          <li>Skill Tag</li>
          {/* {candidate.tags.map((tag, i) => (
          <li key={i}>{tag}</li>
        ))} */}
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
