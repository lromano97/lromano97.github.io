import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import styled from "styled-components";

import Footer from "../Footer";
import Section from "../Section";
import Text from "../Text";

import ContactCard from "./ContactCard/ContactCard";
import ContactIcon from "./ContactIcon/ContactIcon";
import "./Contact.scss";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const background = require("../../images/backgrounds/contact.png");

const ContactSection = styled(Section)`
	height: 100vh;
	width: 100%;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	background-image: url(${background});
	background-position: right 0px bottom 0px;
	background-repeat: no-repeat;
	background-size: 100% auto;

	@media (min-width: 600px) {
		justify-content: space-evenly;
	}
`;

const ContactCardsContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
	align-items: center;
	width: 80%;
	height: 70%;

	@media (min-width: 600px) {
		flex-direction: row;
	}
`;

const Contact: React.FC = () => {
	return (
		<div className="section contact-section">
			<div className="heading-container">
				<p className="text like-h2">We are a message away.</p>
				<p className="text like-h4">I’d love to hear from you.</p>
			</div>
			<ContactCardsContainer>
				<div className="card contact-card">
					<ContactIcon>
						<FiLinkedin />
					</ContactIcon>
				</div>
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
			</ContactCardsContainer>
			<Footer />
		</div>
	);
};

export default Contact;
