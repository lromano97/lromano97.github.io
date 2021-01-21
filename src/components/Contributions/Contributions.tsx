import React from "react";
import styled from "styled-components";

import { Github as GithubType, StackOverflow as StackOverflowType } from "../../types";
import Section from "../Section";
import Text from "../Text";

import Github from "./Github/Github";
import StackOverflow from "./Stackoverflow/Stackoverflow";

const ContributionContainer = styled(Section)`
	height: 100vh;
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
		<ContributionContainer>
			<TextContainer>
				<Text size="medium" color="blue" weight="medium" align="left">
					My work
				</Text>
				<Text size="medium" weight="bold" align="left">
					I like to contribute to the community on my free time.
				</Text>
			</TextContainer>
			<NetworksContainer>
				<StackOverflow {...stackoverflow} />
				<Github {...github} />
			</NetworksContainer>
		</ContributionContainer>
	);
};

export default Contributions;
