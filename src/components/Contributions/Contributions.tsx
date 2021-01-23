import React from "react";
import styled from "styled-components";

import { Github as GithubType, StackOverflow as StackOverflowType } from "../../types";
import Section from "../Section";
import Text from "../Text";

import Github from "./Github/Github";
import StackOverflow from "./Stackoverflow/Stackoverflow";
import "./Contributions.scss";

const ContributionContainer = styled(Section)`
	height: 100vh;
	padding: 0;
`;

const TextContainer = styled.div`
	height: 40%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const NetworksContainer = styled.div`
	height: 60%;
	width: 100%;
	background-color: #3482b9;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	padding: 0px 10px;
`;

type ContributionsProps = {
	stackoverflow: StackOverflowType;
	github: GithubType;
};

const Contributions: React.FC<ContributionsProps> = ({ stackoverflow, github }) => {
	return (
		<div className="section work-section">
			<div className="heading-container text-container">
				<p className="text like-h3">My work</p>
				<p className="text like-h2">I like to contribute to the community on my free time.</p>
			</div>
			<div className="network-container">
				<StackOverflow {...stackoverflow} />
				<Github {...github} />
			</div>
		</div>
	);
};

export default Contributions;
