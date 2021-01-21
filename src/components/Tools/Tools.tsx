import React from "react";
import styled from "styled-components";

import Container from "../Container";
import Section from "../Section";
import Text from "../Text";

import Tool from "./Tool";

const ToolsSection = styled(Section)`
	justify-content: space-around;
	height: 100vh;
	background: linear-gradient(180deg, #3482b9 50%, white 50%);
`;

const ToolsText = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

const frontend = ["React.js", "React Native"];
const backend = ["Node.js", "Spring Boot"];
const databases = ["MongoDB", "PostgreSQL", "OracleDB"];

const Tools: React.FC = () => {
	return (
		<ToolsSection>
			<ToolsText>
				<Text size="large" weight="bold" color="white" align="center">
					The tools I love using.
				</Text>
			</ToolsText>
			<Container>
				<Tool
					toolSet={frontend}
					icon="frontend"
					title="Frontend"
					caption="What I use to create awesome user interfaces with a focus on performance and user experience"
				/>
				{/* <Tool
					toolSet={backend}
					icon="server"
					title="Server-side"
					caption="What I use to create high performance microservices"
				/>
				<Tool toolSet={databases} icon="database" title="Databases" caption="Where I like to store my data" /> */}
			</Container>
		</ToolsSection>
	);
};

export default Tools;
