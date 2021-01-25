import React from "react";

import "./Languages.scss";
import LanguageBadge from "./Languages/LanguageBadge";

const Languages: React.FC = () => {
	return (
		<div className="language-section">
			<p className="like-h3 language-text">I speak TypeScript, JavaScript and I’m learning Java </p>
			<div className="badges">
				<div>
					<LanguageBadge icon="typescript" />
				</div>
				<div className="row2">
					<LanguageBadge icon="javascript" />
					<LanguageBadge icon="java" />
				</div>
			</div>
		</div>
	);
};

export default Languages;
