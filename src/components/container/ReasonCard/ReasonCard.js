import React from "react";
import "./ReasonCard.scss";

function ReasonCard({ icon, title, description }) {
  return (
    <div className="ReasonCard">
      <div className="ReasonCard__icon">
        <div className="ReasonCard__icon--background">
          <img className="ReasonCard__icon--image" src={icon.path} alt={icon.description} />
        </div>
      </div>
      <div className="ReasonCard__title">{title}</div>
      <div className="ReasonCard__description">{description}</div>
    </div>
  );
}

export default ReasonCard;
