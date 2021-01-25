import React from "react";
import { SiTypescript, SiJavascript, SiJava } from "react-icons/si";
import "./LanguageBadge.scss";

type Badge = "typescript" | "javascript" | "java";
type BadgesMapping = {
	[name in Badge]: JSX.Element;
};

const Badges: BadgesMapping = {
	typescript: (
		<div className="typescript-badge">
			<SiTypescript />
		</div>
	),
	javascript: (
		<div className="javascript-badge">
			<SiJavascript color="black" />
		</div>
	),
	java: (
		<div className="java-badge">
			<SiJava />
		</div>
	),
};

type LanguageBadgeProps = {
	icon: Badge;
};

const LanguageBadge: React.FC<LanguageBadgeProps> = ({ icon }) => {
	return Badges[icon];
};

export default LanguageBadge;
