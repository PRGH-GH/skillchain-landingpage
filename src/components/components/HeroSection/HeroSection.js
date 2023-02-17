import React from "react";
import "./HeroSection.scss";

function HeroSection() {
	return (
		<div className="HeroSection">
			<div className="HeroSection-main">
				<h1 className="HeroSection-main__title">
					Uniting{" "}
					<span className="HeroSection-main__title--circled">skill</span> with
					opportunity
				</h1>
				<p className="HeroSection-main__text">
					SkillChain connects job seekers with top employers to find the perfect
					match for job vacancies.
				</p>
				<a href="#" target="_blank">
					<button className="HeroSection-main__button">View Jobs</button>
				</a>
			</div>
			<div className="HeroSection__image"></div>
		</div>
	);
}

export default HeroSection;
