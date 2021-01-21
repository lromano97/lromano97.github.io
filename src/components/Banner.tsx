import React from "react";
import styled from "styled-components";

import Section from "./Section";
import Text from "./Text";

const BannerSection = styled(Section)`
	height: 100vh;
	align-items: center;
`;

const Banner: React.FC = () => (
	<BannerSection>
		<div>
			<Text size="medium" color="blue" weight="medium">
				Who am I?
			</Text>
			<Text size="x-large" weight="bold">
				Hello, my name's Lucas. I'm a Software Engineer.
			</Text>
		</div>
	</BannerSection>
);

export default Banner;
