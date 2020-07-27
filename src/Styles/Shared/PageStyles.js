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

export const ChalkBoard = styled.div`
	background-color: ${props => (props.bgColor ? props.bgColor : 'black')};
	border-top: 5px solid #555;
	border-left: 5px solid #555;
	border-right: 5px solid #444;
	border-bottom: 5px solid #444;
	border-radius: 8px;
	color: ${props => props.color};
	margin: 2rem 1rem;
	padding: 1.5rem 1rem;
	text-align: center;

	@media (min-width: 40rem) {
	}
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
		max-height: 70%;
		max-width: 70%;
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

export const HeroImage = styled.img`
	border-radius: 50%;
	border: 5px solid #555;
	outline: black;
`;

export const Pcolumn = styled.p`
	color: ${props =>
		props.color ? props.color : theme.randomColor(backlightArray)};
	display: flex;
	flex-flow: column wrap;
	text-align: justify;
	text-shadow: 2px 2px 2px black;

	@media (min-width: 40rem) {
		margin-right: 20px;
		max-width: 10rem;
	}
`;

export const SiteBadge = styled.div`
	background-color: white;
	border: 1px solid black;
	border-radius: 20px;
	display: block;
	height: 10rem;
	margin: 2rem auto;
	opacity: 0.6;
	padding: 1rem;
	transition: all 200ms ease;
	vertical-align: middle;
	width: 10rem;

	&:hover {
		box-shadow: 3px 3px 6px black;
		opacity: 1;
		transition: all 200ms ease;
		transform: scale(1.1);
	}
`;

export const SiteLink = styled.a`
	color: ${props => props.color};
	font-weight: bold;
	opacity: 0.8;
	text-align: center;
	text-decoration: none;

	&:hover {
		opacity: 1;
		text-shadow: 4px 4px 8px black;
		transition: all 200ms ease;
		transform: scale(1.5);
	}
`;

export const SpacedFlexRow = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
	margin-top: 3rem;
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
