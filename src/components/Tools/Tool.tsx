import React from "react";
import styled from "styled-components";
import { FiLayout, FiServer, FiDatabase } from "react-icons/fi";

import Text from "../Text";

const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	width: 75%;
	height: 80%;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
	margin: 15px;
	background-color: white;
	@media (min-width: 600px) {
		width: 350px;
		height: 500px;
	}
`;

type IconContainerProps = { backgroundColor: string };

const IconContainer = styled.div<IconContainerProps>`
	display: flex;
	justify-content: center;
	align-conten: center;
	border-radius: 50%;
	background-color: ${({ backgroundColor }) => backgroundColor};
	padding: 20px;
`;

type Icon = "frontend" | "server" | "database";
type ToolProps = {
	icon: Icon;
	title: string;
	caption: string;
	toolSet: string[];
};

const icons = {
	frontend: (
		<IconContainer backgroundColor="#F8C95E">
			<FiLayout />
		</IconContainer>
	),
	server: (
		<IconContainer backgroundColor="#7852D9">
			<FiServer />
		</IconContainer>
	),
	database: (
		<IconContainer backgroundColor="#2DBA9F">
			<FiDatabase />
		</IconContainer>
	),
};

const Tool: React.FC<ToolProps> = ({ toolSet, title, caption, icon }) => {
	const toolsList = toolSet.map((tool) => <Text size="small">{tool}</Text>);
	const toolIcon = icons[icon];

	return (
		<Card>
			{toolIcon}
			<Text weight="bold" size="medium" color="blue">
				{title}
			</Text>
			<Text weight="regular" size="x-small" color="black" align="center">
				{caption}
			</Text>
			{toolsList}
		</Card>
	);
};

export default Tool;
