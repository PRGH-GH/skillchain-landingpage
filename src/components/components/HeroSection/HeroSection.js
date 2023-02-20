import React from "react";
import "./HeroSection.scss";
import HeroImage from "./assets/hero-image.svg";

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
					className="HeroSection__button"
					href="https://www.google.com"
					target="_blank"
					rel="noreferrer"
				>
					View Jobs
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
