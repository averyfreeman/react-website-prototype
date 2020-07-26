import styled, { keyframes } from 'styled-components';
import * as theme from 'Styles/Shared/styledThemes';

export const backlightArray = [
	theme.capri,
	theme.aqua,
	theme.oceanGreen,
	theme.yellow,
	'orange',
	theme.lightRed
];

export const themeArray = [
	theme.dimGray,
	theme.regalBlue,
	theme.oceanGreen,
	theme.myrtleGreen,
	theme.aqua,
	theme.capri,
	theme.khaki,
	theme.lightRed,
	theme.roseTaupe,
	theme.lightNavy,
	'yellow',
	'white',
	'purple',
	'green'
];

export const testArray = [
	theme.dimGray,
	theme.regalBlue,
	theme.oceanGreen,
	theme.myrtleGreen,
	theme.aqua,
	theme.capri,
	theme.khaki,
	theme.lightRed
];

export const rotate = keyframes`
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
		`;

export const AppLogo = styled.i`
	animation: ${rotate} infinite 6s linear;
	height: 80px;
	&:hover {
	}
`;

export const BottomRow = styled.div`
	bottom: 6rem;
	display: block;
	height: 6rem;
	margin: ${props => props.heightMargin}rem auto;
	padding: 0;
	padding-top: 6rem;
	position: relative;
	// width: 100vw;
	text-align: center;
`;

export const CenteredImage = styled.img`
	display: block;
	left: 0;
	margin: 0;
	padding: 0;
	height: ${props => props.height};
	width: ${props => props.width};
	text-align: center;
`;

export const CenteredRow = styled.div`
	background-color: transparent;
	display: block;
	height: ${props => props.height};
	margin: ${props => props.heightMargin}rem auto;
	padding: ${props => (props.padding ? props.padding : 0)};
	text-align: center;
	width: ${props => props.width};
`;

export const Column = styled.div`
	display: flex;
	width: 100vw;
	flex-direction: column;
	align-items: center;
	overflow: hidden;

	&:last-child {
		margin: auto;
	}
`;

export const Constrain = styled.div`
	position: relative;
	margin: auto;
	max-height: 50vh;
	max-width: 50vw;

	img {
		height: 70%;
		width: 70%;
	}

	@media (min-width: 60rem) {
		height: 60%;
		width: 60%;
	}
`;

const cycleColor = keyframes`
				0% {
					color: ${backlightArray[0]};
				}
				20% {
					color: ${backlightArray[1]};
				}
				40% {
					color: ${backlightArray[2]};
				}
				60% {
					color: ${backlightArray[3]};
				}
				80% {
					color: ${backlightArray[4]};
				}
				100% {
					color: ${backlightArray[5]};
				}
		`;

export const CycleColor = styled.div`
	animation: ${cycleColor} 6s linear infinite;
	margin: 0;
	padding: 0;
`;

export const FlexColumn = styled.div`
	display: flex;
	flex-flow: column wrap;
	align-items: center;
`;

export const Heading = styled.h1`
	background-color: transparent;
	color: ${props => props.color};
	font-size: ${props => (props.size ? props.size : 4)}rem;
	margin: ${props => props.heightMargin}rem auto;
	text-align: center;
	text-shadow: 3px 3px 6px black;
	width: 100%;
`;

export const TextStyling = styled.div`
	color: #cfcfcf;
	text-shadow: 2px 2px 3px black;
	font-size: 1.2rem;
	flex-flow: row wrap;
	padding-left: 5%;
	width: 96%;
	font-family: 'Josefin Sans', 'Dosis', -apple-system, BlinkMacSystemFont,
		'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
		'Droid Sans', 'Helvetica Neue', sans-serif;

	h3 {
		font-family: 'Dosis';
		font-size: 2.4rem;
	}
`;
