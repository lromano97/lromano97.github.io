import styled from "styled-components";
import React from "react";

import { BadgeColors } from "../../../types";
import Text from "../../Text";

const colors = {
	bronze: {
		color: "#b08d57",
		border: "#a97142",
	},
	silver: {
		color: "#bec2cb",
		border: "#a8a7ae",
	},
	gold: {
		color: "#d4af37",
		border: "#d7be69",
	},
};

type MedalProps = {
	color: BadgeColors;
};

const Medal = styled.div<MedalProps>`
	height: 30px;
	width: 30px;
	display: inline-block;
	position: relative;
	border-radius: 50%;
	background-color: ${({ color }) => colors[color].color};
	border-color: ${({ color }) => colors[color].border};
	border-style: solid;
	border-width: medium;
	overflow: hidden;

	&:after {
		animation: shine 5s ease-in-out infinite;
		animation-fill-mode: forwards;
		content: "";
		position: absolute;
		top: -110%;
		left: -210%;
		width: 200%;
		height: 200%;
		opacity: 0;
		transform: rotate(30deg);

		background: rgba(255, 255, 255, 0.13);
		background: linear-gradient(
			to right,
			rgba(255, 255, 255, 0.13) 0%,
			rgba(255, 255, 255, 0.13) 77%,
			rgba(255, 255, 255, 0.5) 92%,
			rgba(255, 255, 255, 0) 100%
		);
	}

	@keyframes shine {
		10% {
			opacity: 1;
			top: -30%;
			left: -30%;
			transition-property: left, top, opacity;
			transition-duration: 0.7s, 0.7s, 0.15s;
			transition-timing-function: ease;
		}
		100% {
			opacity: 0;
			top: -30%;
			left: -30%;
			transition-property: left, top, opacity;
		}
	}
`;

const BadgeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: auto 10px;
`;

type BadgeProps = {
	color: BadgeColors;
	amount: number;
};

const Badge: React.FC<BadgeProps> = ({ color, amount }) => (
	<BadgeContainer>
		<Medal color={color} />
		<Text size="small">{amount}</Text>
	</BadgeContainer>
);

export default Badge;
