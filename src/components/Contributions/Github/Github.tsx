import React from "react";

import { Github as GithubType } from "../../../types";
import Text from "../../Text";
import Image from "../ContributionImage/ContributionImage";

type GithubProps = GithubType;

const Github: React.FC<GithubProps> = ({ image, link, name }) => {
	return (
		<a className="card network-card" href={link} target="_blank">
			<Image src={image} alt="github profile image" />
			<Text size="small">{name}</Text>
		</a>
	);
};

export default Github;
