import React from "react";
import { SiGatsby } from "react-icons/si";
import styled from "styled-components";

import Text from "./Text";

const FooterContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	bottom: 0;
`;

const Footer: React.FC = () => {
	return (
		<FooterContainer>
			<Text color="white">
				Powered by{" "}
				<span>
					<SiGatsby color="#663398" size="1.3em" />
				</span>{" "}
				and a lot of 🧉
			</Text>
		</FooterContainer>
	);
};

export default Footer;
