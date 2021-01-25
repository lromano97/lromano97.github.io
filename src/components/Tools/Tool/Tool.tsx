import React from "react";
import { FiLayout, FiServer, FiDatabase } from "react-icons/fi";

import "./Tool.scss";

type Icon = "frontend" | "server" | "database";
type ToolProps = {
	icon: Icon;
	title: string;
	caption: string;
	toolSet: string[];
};

const icons = {
	frontend: (
		<div className="icon-container yellow">
			<FiLayout />
		</div>
	),
	server: (
		<div className="icon-container purple">
			<FiServer />
		</div>
	),
	database: (
		<div className="icon-container green">
			<FiDatabase />
		</div>
	),
};

const Tool: React.FC<ToolProps> = ({ toolSet, title, caption, icon }) => {
	const toolsList = toolSet.map((tool) => <p className="like-h3">{tool}</p>);
	const toolIcon = icons[icon];

	return (
		<div className="tool-card">
			{toolIcon}
			<p className="text like-h3 subheading">{title}</p>
			<p className="text like-h4 centered-text">{caption}</p>
			{toolsList}
		</div>
	);
};

export default Tool;
