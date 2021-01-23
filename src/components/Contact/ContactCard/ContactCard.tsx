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
	box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);

	@media (max-width: 400px) {
		padding: 20px;
	}

	@media (min-width: 501px) {
		box-shadow: none;
		&:hover {
			box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
		}
	}
`;

export default ContactCard;
