import React from "react";
import { staticFeaturedJobs } from "../../state/models/staticFeaturedJobs";
import "./FeaturedJobCard.scss";


function FeaturedJobCard({job, logoNameToPath}) {
  return (
    <>
      <div className="FeaturedJobCard">
        <div className="FeaturedJobCard__header">
          <img
            className="FeaturedJobCard__header__img"
            src="logoNameToPath"
            alt="Company Logo"
          ></img>
          <div>
            <h3 className="FeaturedJobCard__header__company">
              {staticFeaturedJobs.company}
            </h3>
            <p className="FeaturedJobCard__header__location">
              {staticFeaturedJobs.location}
            </p>
          </div>
        </div>
        <div className="FeaturedJobCard__info">
          <h3 className="FeaturedJobCard__info__title">
            {staticFeaturedJobs.title}
          </h3>
          <p className="FeaturedJobCard__info__working-time">
            {staticFeaturedJobs.workingTime}
          </p>
        </div>
        <div className="FeaturedJobCard__description">
          {staticFeaturedJobs.description}
        </div>
        <ul className="FeaturedJobCard__tags">
          {staticFeaturedJobs.tags.map((tag, i) => (
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
    </>
  );
}

export default FeaturedJobCard;
