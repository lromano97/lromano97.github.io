import React from "react";
import styled from "styled-components";

import { Github as GithubType } from "../../../types";
import Text from "../../Text";

type GithubProps = GithubType;

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
	background: white;
	height: 30%;
	box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
	// &:hover {
	// 	box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
	// }

	@media (min-width: 300px) {
		padding: 20px;
	}
`;

const Image = styled.img`
	height: 100px;
	border-radius: 50%;
	margin-right: 10px;
	@media (max-width: 370px) {
		height: 80px;
	}
`;

const Github: React.FC<GithubProps> = ({ image, link, name }) => {
	return (
		<StackOverflowContainer>
			<Image src={image} alt="github profile image" />
			<Text size="small">{name}</Text>
		</StackOverflowContainer>
	);
};

export default Github;
