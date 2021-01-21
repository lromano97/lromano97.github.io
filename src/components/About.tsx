import React from "react";
import styled from "styled-components";

import Text from "./Text";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const background = require("../images/backgrounds/about.png");

const AboutSection = styled.section`
	height: 100vh;
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	background-image: url(${background});
	background-position: right 0px bottom 0px;
	background-repeat: no-repeat;
	background-size: 100% auto;
`;

const About: React.FC = () => {
	return (
		<AboutSection>
			<div>
				<Text size="medium" color="blue" weight="medium">
					About me
				</Text>
				<Text size="large" weight="bold">
					I like to design and develop complex systems as well as user-friendly applications.
				</Text>
			</div>
		</AboutSection>
	);
};

export default About;
