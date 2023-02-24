import React from "react";
import "./ReinforcementStatement.scss";
import reinforcementImage from "./assets/reinforcementImage.jpg";


function ReinforcementStatement() {
  return (
    <div className="Reinforcement">
      <div className="Reinforcement__image">
        <img src={reinforcementImage} alt="reinforcementImage"/>
      </div>
      <div className="Reinforcement__statement">
        <h2 className="Reinforcement__statement__header">
          Unleash your potential with SkillChain
        </h2>
        <u className="Reinforcement__statement__underline"/>
        <p className="Reinforcement__statement__text">
          SkillChain is a modern job search platform that connects job seekers
          with top employers to find the perfect match for job vacancies. It
          uses the latest technologies, including AI, to offer a personalized
          and efficient job search experience. SkillChain also provides
          continuous upskilling opportunities to help job seekers advance their
          careers and remain competitive in the job market. With SkillChain, job
          seekers can expect a smarter, faster, and more effective way to find
          their next career opportunity.
        </p>
      </div>
    </div>
  );
}

export default ReinforcementStatement;
