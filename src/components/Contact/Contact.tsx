import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import "./Contact.scss";

const Contact: React.FC = () => {
	return (
		<div className="contact-section">
			<div className="heading-container">
				<p className="like-h1">We are a message away.</p>
				<p className="sub-title">I’d love to hear from you.</p>
			</div>
			<div className="contact-container">
				<a className="card contact-card">
					<div className="contact-icon">
						<FiLinkedin />
					</div>
				</a>
				<a className="card contact-card">
					<div className="contact-icon">
						<FiGithub />
					</div>
				</a>
				<a className="card contact-card">
					<div className="contact-icon">
						<FiMail />
					</div>
				</a>
			</div>
		</div>
	);
};

export default Contact;
