import React, { useState } from "react";
import buildingIcon from "./assets/buildingIcon.svg";
import "./CallToAction.scss";

function CallToAction() {
  const [selectRole, setSelectRole] = useState(true);

  return (
    <div className="CallToAction">
      <h2>Let's Get Started!</h2>
      <div className="underLine" />
      <div className="CallToAction__toggleSwitch-wrapper">
        <p>Select your role:</p>
        <button
          onClick={() => setSelectRole(!selectRole)}
          className={"toggleOne " + (selectRole ? "toggled" : "")}
        >
          <img src={buildingIcon} alt="buildingIcon" />
          Employer
        </button>
        <button
          onClick={() => setSelectRole(!selectRole)}
          className={"toggleTwo " + (selectRole ? "" : "toggled")}
        >
          <img src={buildingIcon} alt="buildingIcon" />
          Job Seeker
        </button>
      </div>
      {selectRole ? (
        <div> Employer stuff here</div>
      ) : (
        <div> Job Seeker stuff here</div>
      )}
    </div>
  );
}

export default CallToAction;
