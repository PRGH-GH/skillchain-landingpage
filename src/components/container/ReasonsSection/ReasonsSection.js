import React from "react"

import skillBasedLogo from "../ReasonCard/assets/icons/skill-based-search.svg";
import continousUpskillingLogo from "../ReasonCard/assets/icons/continous-upskilling.svg";
import bootcampsLogo from "../ReasonCard/assets/icons/bootcamps.svg";
import widerReachLogo from "../ReasonCard/assets/icons/wider-reach.svg";
import easyApplicationLogo from "../ReasonCard/assets/icons/easy-application-process.svg";
import trainingDevelopmentLogo from "../ReasonCard/assets/icons/training-development.svg";

function ReasonsSection() {
  const pathToLogo = {
    'skill-based-search': skillBasedLogo,
    'continous-upskilling': continousUpskillingLogo,
    'bootcamps': bootcampsLogo,
    'wider-reach': widerReachLogo,
    'easy-application': easyApplicationLogo,
    'training-development': trainingDevelopmentLogo,
}

  return (
    <div>
      ReasonsSection
    </div>
  )
};

export default ReasonsSection;
