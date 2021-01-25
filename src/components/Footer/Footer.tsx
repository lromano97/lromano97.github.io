import React from "react";
import { SiGatsby } from "react-icons/si";
import "./Footer.scss";

const Footer: React.FC = () => {
	return (
		<div className="footer-section">
			<p className="like-h4 foot-text">
				Powered by{" "}
				<span>
					<SiGatsby size="1em" />
				</span>{" "}
				and a lot of 🧉
			</p>
		</div>
	);
};

export default Footer;
