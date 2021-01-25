import React from "react";

import { Github as GithubType, StackOverflow as StackOverflowType } from "../../types";

import Github from "./Github/Github";
import StackOverflow from "./Stackoverflow/Stackoverflow";
import "./Contributions.scss";

type ContributionsProps = {
	stackoverflow: StackOverflowType;
	github: GithubType;
};

const Contributions: React.FC<ContributionsProps> = ({ stackoverflow, github }) => {
	return (
		<div className="work-section">
			<div className="text-container">
				<p className="like-h3 subheading">My work</p>
				<p className="like-h2">I like to contribute to the community on my free time.</p>
			</div>
			<div className="network-container">
				<StackOverflow {...stackoverflow} />
				<Github {...github} />
			</div>
		</div>
	);
};

export default Contributions;
