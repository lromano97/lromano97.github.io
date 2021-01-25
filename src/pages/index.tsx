import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons/lib";
import axios, { AxiosResponse } from "axios";

import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Tools from "../components/Tools/Tools";
import "../css/typography.scss";
import "../css/index.scss";
import { Github as GithubType, StackOverflow as StackOverflowType } from "../types";
import Contributions from "../components/Contributions/Contributions";
import Contact from "../components/Contact/Contact";
import Languages from "../components/Languages/Languages";
import Footer from "../components/Footer/Footer";

// markup
const IndexPage: React.FC = () => {
	const [loading, setLoading] = useState(false);
	const [stackOverflowStats, setStackOverflowStats] = useState<StackOverflowType>();
	const [githubStats, setGithubStats] = useState<GithubType>();

	useEffect(() => {
		const getStats = async () => {
			setLoading(true);
			const stackOverflowReq = axios.get(
				"https://api.stackexchange.com/2.2/users/13339352?order=desc&sort=reputation&site=stackoverflow"
			);
			const githubReq = axios.get("https://api.github.com/users/lromano97");
			try {
				const [stackOverflowRes, githubRes] = await Promise.all([stackOverflowReq, githubReq]);
				setStackOverflowStats(getStackOverflowData(stackOverflowRes));
				setGithubStats(getGithubData(githubRes));
			} catch (e) {
				console.error("Cannot load stackoverflow and github information.");
			}
			setLoading(false);
		};
		getStats();
	}, []);

	const getStackOverflowData = (response: AxiosResponse): StackOverflowType => {
		const { reputation, link, profile_image, display_name } = response.data.items[0];
		return {
			reputation,
			link,
			image: profile_image,
			name: display_name,
		};
	};

	const getGithubData = (response: AxiosResponse): GithubType => {
		const { login, avatar_url, html_url } = response.data;
		return {
			image: avatar_url,
			link: html_url,
			name: login,
		};
	};

	return (
		<IconContext.Provider value={{ color: "white", size: "3em" }}>
			{!loading && (
				<React.Fragment>
					<Banner />
					<About />
					<Tools />
					<Languages />
					{stackOverflowStats && githubStats && (
						<Contributions stackoverflow={{ ...stackOverflowStats }} github={{ ...githubStats }} />
					)}
					<Contact />
					<Footer />
				</React.Fragment>
			)}
		</IconContext.Provider>
	);
};

export default IndexPage;
