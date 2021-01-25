import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	width: 100%;

	@media (min-width: 500px) {
		justify-content: space-evenly;
	}
`;

export default Container;
