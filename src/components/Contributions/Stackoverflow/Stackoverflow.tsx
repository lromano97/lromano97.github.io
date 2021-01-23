import React from "react";

import { StackOverflow as StackOverflowType } from "../../../types";
import Text from "../../Text";
import Image from "../ContributionImage/ContributionImage";

type StackOverflowProps = StackOverflowType;

const StackOverflow: React.FC<StackOverflowProps> = ({ name, reputation, image, link }) => {
	return (
		<a className="card network-card" href={link} target="_blank">
			<Image src={image} alt="stackoverflow picture" />
			<div>
				<Text size="small">{name}</Text>
				<Text size="small">{reputation}</Text>
			</div>
		</a>
	);
};

export default StackOverflow;
