import styled from "styled-components";

const ContributionCard = styled.a`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	text-decoration: none;
	align-items: center;
	transition: 0.5s;
	border-radius: 10px;
	padding: 30px;
	width: 80%;
	margin: 20px auto;
	background-color: white;
	height: 30%;
	box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
	// &:hover {
	// 	box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
	// }

	@media (max-width: 400px) {
		padding: 20px;
	}
`;

export default ContributionCard;
