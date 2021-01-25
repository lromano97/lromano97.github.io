import React from "react";

import { StackOverflow as StackOverflowType } from "../../../types";
import "../Contributions.scss";

type StackOverflowProps = StackOverflowType;

const StackOverflow: React.FC<StackOverflowProps> = ({ name, reputation, image, link }) => {
	return (
		<a className="network-card" href={link} target="_blank">
			<img className="contribution-image" src={image} alt="stackoverflow picture" />
			<div>
				<p className="like-h3">{name}</p>
				<p className="like-h3">{reputation}</p>
			</div>
		</a>
	);
};

export default StackOverflow;
