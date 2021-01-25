import React, { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import "./Tools.scss";
import Tool from "./Tool/Tool";

const frontend = ["React.js", "React Native"];
const backend = ["Node.js", "Spring Boot"];
const databases = ["MongoDB", "PostgreSQL", "OracleDB"];

const Tools: React.FC = () => {
	const [selected, setSelected] = useState(0);
	const smallDevice = window.matchMedia("(max-width: 1200px").matches;

	useEffect(() => {
		if (smallDevice) {
			setSelected(0);
		}
	}, [smallDevice]);

	const shouldBeVisible = (index: number) => !smallDevice || index === selected;
	const goLeft = () => {
		if (selected === 0) return;
		setSelected((prevSelected) => prevSelected - 1);
	};

	const goRight = () => {
		if (selected === 2) return;
		setSelected((prevSelected) => prevSelected + 1);
	};

	return (
		<div className="section tool-section">
			<div className="heading-container centered-heading-container">
				<p className="text like-h2 tools-text">The tools I love using.</p>
			</div>
			<div className="tools-container">
				{shouldBeVisible(0) && (
					<Tool
						toolSet={frontend}
						icon="frontend"
						title="Frontend"
						caption="What I use to create awesome user interfaces with a focus on performance and user experience"
					/>
				)}
				{shouldBeVisible(1) && (
					<Tool
						toolSet={backend}
						icon="server"
						title="Server-side"
						caption="What I use to create high performance microservices"
					/>
				)}
				{shouldBeVisible(2) && (
					<Tool
						toolSet={databases}
						icon="database"
						title="Databases"
						caption="Where I like to store my data"
					/>
				)}
			</div>
			{smallDevice && (
				<div className="arrows-container">
					<FiArrowLeft className="arrow" color="#c7c7c7" onClick={goLeft} />
					<FiArrowRight className="arrow" color="#c7c7c7" onClick={goRight} />
				</div>
			)}
		</div>
	);
};

export default Tools;
