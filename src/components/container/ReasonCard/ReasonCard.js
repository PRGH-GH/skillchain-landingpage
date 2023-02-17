import React from "react";
import "./ReasonCard.scss";

function ReasonCard({ icon, title, description }) {
  return (
    <div className="ReasonCard">
      <div className="ReasonCard__icon">
        <div className="icon__background">
          <img src={icon} />
        </div>
      </div>
      <div className="ReasonCard_title">{title}</div>
      <div className="ReasonCard__description">{description}</div>
    </div>
  );
}

export default ReasonCard;
