import React from "react";
import "./HeroSection.scss";

function HeroSection() {
	return (
		<div className="HeroSection">
			<div className="HeroSection__main">
				<h1 className="HeroSection__title">
					Uniting <span className="HeroSection__title--circled">skill</span>{" "}
					with opportunity
				</h1>
				<p className="HeroSection__text">
					SkillChain connects job seekers with top employers to find the perfect
					match for job vacancies.
				</p>
				<a href="#" target="_blank">
					<button className="HeroSection__button">View Jobs</button>
				</a>
			</div>
			<div className="HeroSection__image"></div>
		</div>
	);
}

export default HeroSection;
