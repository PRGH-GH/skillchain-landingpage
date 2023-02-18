import React from "react";
import "./HeroSection.scss";
import HeroImage from "./img/hero-image.svg";

function HeroSection() {
	return (
		<div className="HeroSection">
			<div className="HeroSection__info">
				<h1 className="HeroSection__title">
					Uniting <span className="HeroSection__title--circled">skill</span>{" "}
					with opportunity
				</h1>
				<p className="HeroSection__text">
					SkillChain connects job seekers with top employers to find the perfect
					match for job vacancies.
				</p>
				<a
					href="https://www.google.de/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<button className="HeroSection__button">View Jobs</button>
				</a>
			</div>
			<div className="HeroSection__image">
				<img
					src={HeroImage}
					alt="Smiling Candidate surrounded by programming languages tags"
				/>
			</div>
		</div>
	);
}

export default HeroSection;
