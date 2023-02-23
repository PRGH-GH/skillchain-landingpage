import React from "react";
import "./ReasonCard.scss";

function ReasonCard({ icon, title, description }) {
  return (
    <div className="ReasonCard">
      <div className="ReasonCard__icon">
        <div className="ReasonCard__icon__background"></div>
        <img
          className="ReasonCard__icon__background__image"
          src={icon.path}
          alt={icon.description}
        />
      </div>
      <h3 className="ReasonCard__title">{title}</h3>
      <div className="ReasonCard__description">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ReasonCard;
