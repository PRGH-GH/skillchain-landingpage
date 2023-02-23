import React from "react";

import skillBasedLogo from "../ReasonCard/assets/icons/skill-based-search.svg";
import continousUpskillingLogo from "../ReasonCard/assets/icons/continous-upskilling.svg";
import bootcampsLogo from "../ReasonCard/assets/icons/bootcamps.svg";
import widerReachLogo from "../ReasonCard/assets/icons/wider-reach.svg";
import easyApplicationLogo from "../ReasonCard/assets/icons/easy-application-process.svg";
import trainingDevelopmentLogo from "../ReasonCard/assets/icons/training-development.svg";

import { staticReasons } from "../../../state/models/staticReasons";
import ReasonCard from "../ReasonCard/ReasonCard";
import "./ReasonsSection.scss";

function ReasonsSection() {
  const pathToLogo = {
    "skill-based-search": skillBasedLogo,
    "continous-upskilling": continousUpskillingLogo,
    bootcamps: bootcampsLogo,
    "wider-reach": widerReachLogo,
    "easy-application": easyApplicationLogo,
    "training-development": trainingDevelopmentLogo,
  };
  console.log(staticReasons);
  const firstRow = staticReasons.slice(0, 3);
  const secondRow = staticReasons.slice(3,6);

  console.log(firstRow);

  return (
    <div className="ReasonsSection">
      <div className="ReasonsSection__contentWrapper">
        <div className="ReasonsSection__heading">
          <h2>Why SkillChain</h2>
        </div>
        <div className="ReasonSection__cardsWrapper">
          <div className="ReasonsSection__cardsWrapper__firstRow">
            {firstRow.map((reason, i) => (
              <li key={reason.title + i}>
                <ReasonCard
                  icon={{
                    path: pathToLogo[reason.icon],
                    description: reason.title,
                  }}
                  title={reason.title}
                  description={reason.description}
                />
              </li>
            ))}
          </div>
          <div className="ReasonsSection__cardsWrapper__secondRow">
            {secondRow.map((reason, i) => (
              <li className="reasonCard" key={reason.title + i}>
                <ReasonCard
                  icon={{
                    path: pathToLogo[reason.icon],
                    description: reason.title,
                  }}
                  title={reason.title}
                  description={reason.description}
                />
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReasonsSection;
