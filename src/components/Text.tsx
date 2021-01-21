import styled from "styled-components";

type Weight = "regular" | "medium" | "bold";
type Size = "x-small" | "small" | "medium" | "large" | "x-large";
type Color = "blue" | "black" | "white" | "gray";
type Align = "center" | "left";

const weights = {
	regular: "normal",
	medium: "700",
	bold: "bold",
};

const sizes = {
	"x-small": "15px",
	small: "20px",
	medium: "30px",
	large: "35px",
	"x-large": "40px",
};

const sizesMobile = {
	"x-small": "15px",
	small: "25px",
	medium: "30px",
	large: "35px",
	"x-large": "40px",
};

const colors = {
	blue: "#3482b9",
	black: "black",
	gray: "#676767",
	white: "white",
};

const margin = {
	large: "15px",
};

type TextProps = {
	weight?: Weight;
	size?: Size;
	color?: Color;
	align?: Align;
};

const Text = styled.p<TextProps>`
	font-family: "Montserrat", Verdana, sans-serif;
	font-weight: ${({ weight }) => (weight ? weights[weight] : "normal")};
	font-size: ${({ size }) => (size ? sizesMobile[size] : "15px")};
	color: ${({ color }) => (color ? colors[color] : "black")};
	text-align: ${({ align }) => align || "left"};
	margin: ${({ size }) => (size && margin[size] ? margin[size] : "10px")};

	@media (max-width: 500px) {
		margin: ${({ size }) => (size && margin[size] ? margin[size] : "15px")};
	}

	@media (max-width: 350px) {
		font-size: ${({ size }) => (size === "small" ? "20px" : sizesMobile[size])};
	}
`;

export default Text;
