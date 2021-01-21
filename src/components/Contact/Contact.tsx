import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import styled from "styled-components";

import Footer from "../Footer";
import Section from "../Section";
import Text from "../Text";

import ContactCard from "./ContactCard/ContactCard";
import ContactIcon from "./ContactIcon/ContactIcon";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const background = require("../../images/backgrounds/contact.png");

const ContactSection = styled(Section)`
	height: 100vh;
	width: 100%;
	flex-direction: column;
	justify-content: space-around;
	background-image: url(${background});
	background-position: right 0px bottom 0px;
	background-repeat: no-repeat;
	background-size: 100% auto;

	@media (min-width: 600px) {
		flex-direction: row;
		justify-content: space-evenly;
	}
`;

const Contact: React.FC = () => {
	return (
		<ContactSection>
			<div>
				<Text size="large" weight="bold">
					We are a message away.
				</Text>
				<Text size="small" weight="regular" color="gray">
					I’d love to hear from you.
				</Text>
			</div>
			<ContactCard>
				<ContactIcon>
					<FiLinkedin />
				</ContactIcon>
			</ContactCard>
			<ContactCard>
				<ContactIcon>
					<FiGithub />
				</ContactIcon>
			</ContactCard>
			<ContactCard>
				<ContactIcon>
					<FiMail />
				</ContactIcon>
			</ContactCard>
			<Footer />
		</ContactSection>
	);
};

export default Contact;
