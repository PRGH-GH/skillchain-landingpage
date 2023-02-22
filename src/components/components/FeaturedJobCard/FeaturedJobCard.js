import React from "react";
import "./FeaturedJobCard.scss";

function FeaturedJobCard({ job, logoNameToPath }) {
  return (
      <div className="FeaturedJobCard">
        <div className="FeaturedJobCard__header">
          <img
            className="FeaturedJobCard__header__img"
            src={logoNameToPath}
            alt="Company Logo"
          ></img>
          <div>
            <h3 className="FeaturedJobCard__header__company">{job.company}</h3>
            <p className="FeaturedJobCard__header__location">{job.location}</p>
          </div>
        </div>
        <div className="FeaturedJobCard__info">
          <h3 className="FeaturedJobCard__info__title">{job.title}</h3>
          <p className="FeaturedJobCard__info__working-time">
            {job.workingTime}
          </p>
        </div>
        <div className="FeaturedJobCard__description">{job.description}</div>
        <ul className="FeaturedJobCard__tags">
          {job.tags.map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </ul>
        <a
          className="FeaturedJobCard__button"
          href="https://www.google.com"
          target="_blank"
          rel="noreferrer"
        >
          Apply
        </a>
      </div>
  );
}

export default FeaturedJobCard;
