import React from "react";

import { Github as GithubType } from "../../../types";
import "../Contributions.scss";

type GithubProps = GithubType;

const Github: React.FC<GithubProps> = ({ image, link, name }) => {
	return (
		<a className="network-card" href={link} target="_blank">
			<img className="contribution-image" src={image} alt="github profile image" />
			<p className="like-h3">{name}</p>
		</a>
	);
};

export default Github;
