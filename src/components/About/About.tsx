import React from "react";

import "./About.scss";

const About: React.FC = () => {
	return (
		<div className="section about-section">
			<div className="heading-container about-container">
				<p className="text like-h3 subheading">About me</p>
				<p className="text like-h2">
					I like to design and develop complex systems as well as user-friendly applications.
				</p>
			</div>
		</div>
	);
};

export default About;
