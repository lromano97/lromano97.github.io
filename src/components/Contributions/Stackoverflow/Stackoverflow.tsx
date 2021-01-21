import React from "react";
import styled from "styled-components";

import { BadgeColors, StackOverflow as StackOverflowType } from "../../../types";
import Text from "../../Text";

import Badge from "./Badge";

const StackOverflowContainer = styled.a`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	text-decoration: none;
	align-items: center;
	transition: 0.5s;
	border-radius: 10px;
	padding: 30px;
	width: 80%;
	margin: 20px auto;
	background-color: white;

	box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
	// &:hover {
	// 	box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
	// }

	@media (max-width: 350px) {
		padding: 20px;
	}
`;

const Image = styled.img`
	height: 100px;
	border-radius: 50%;
	margin-right: 10px;
	@media (max-width: 350px) {
		height: 80px;
	}
`;

type StackOverflowProps = StackOverflowType;

const StackOverflow: React.FC<StackOverflowProps> = ({ badges, name, reputation, image, link }) => {
	const badgesComponents = Object.entries(badges).map(([name, amount]) => (
		<Badge color={name as BadgeColors} amount={amount} />
	));

	return (
		<StackOverflowContainer href={link} target="_blank">
			<Image src={image} alt="stackoverflow picture" />
			<div>
				<Text size="small">{name}</Text>
				<Text size="small">{reputation}</Text>
			</div>
		</StackOverflowContainer>
	);
};

export default StackOverflow;
