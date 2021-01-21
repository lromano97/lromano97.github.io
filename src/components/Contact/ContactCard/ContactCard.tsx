import styled from "styled-components";

const ContactCard = styled.div`
	width: 50%;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	padding: 30px;
	max-width: 200px;
	margin: 10px auto;
	box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
	// &:hover {
	// 	box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
	// }
	@media (min-width: 350px) {
		padding: 20px;
	}
`;

export default ContactCard;
