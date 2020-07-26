import styled from 'styled-components';
import transition from 'styled-transition-group';
import * as theme from 'Styles/Shared/styledThemes';

export const backlightArray = [
	theme.aqua,
	theme.oceanGreen,
	theme.capri,
	theme.yellow,
	theme.lightRed
];

export const Backdrop = styled.div`
	background-color: rgba(0, 0, 0, 0.25);
	left: 0;
	opacity: ${props => (!props.isOpen ? '1' : '0.2')};
	top: 0;
	transition: opacity 200ms linear;

	&:hover {
		cursor: ${props => (props.isOpen ? 'pointer' : 'unset')};
	}

	@media (min-width: 40rem) {
		padding-top: 8rem;
	}
`;

export const BackDropContainer = transition.div.attrs({
	appear: true,
	classNames: 'list-transition',
	timeout: 400,
	unmountOnExit: false
})`
  &:enter { 
		opacity: 0.2; 
	}
  &:enter-active {
    opacity: 1;
    transition: all 600ms;
  }
  &:exit { 
		opacity: 1;
	}
  &:exit-active {
    opacity: 0.2;
    transition: all 600ms;
  }
`;

// export const Fade = transition.div.attrs({
// 	appear: true,
// 	classNames: 'mobile-menu',
// 	timeout: 400,
// 	unmountOnExit: true
// })`
//   &:enter {
// 		opacity: 0;
// 	}
//   &:enter-active {
// 		max-height: 100px;
// 		opacity: 1;
//     transition: all 400ms ease;
//   }
//   &:exit {
// 		opacity: 1;
// 	}
//   &:exit-active {
// 		max-height: 0px;
//     opacity: 0;
//     transition: all 400ms ease;
//   }
// `;

export const LoaderContainer = styled.div`
	align-content: center;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	position: absolute;
	left: 48vw;
	top: 30vh;
`;

export const NavContainer = styled.div`
	* {
		box-sizing: border-box;
	}
	position: absolute;

	background-color: #666;
	border: 2px solid #333;
	box-shadow: 3px 3px 6px black;
	height: 100vh;
	margin: 0;
	padding: 0;
	text-align: center;
	width: 18rem;

	@media (min-width: 40rem) {
		height: 6.4rem;
		position: fixed;
		overflow: hidden;
		top: 0;
		left: 0;
		width: 100vw;
		z-index: 3;
	}

	ul {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: calc(6 * 4.2rem);
		justify-content: space-between;
		left: 4rem;
		list-style: none;
		margin: 0;
		max-height: 100vh;
		position: absolute;
		padding: 1rem 0 0.625rem 0;
		top: 3.2rem;
		z-index: 3;

		@media (min-width: 40rem) {
			align-items: flex-start;
			flex-flow: row nowrap;
			height: 4rem;
			justify-content: space-evenly;
			left: 0;
			margin: 0;
			padding: 0;
			top: 0.5rem;
			width: 99vw;
		}
	}

	a {
		// for A tag (minimal effect)
	}

	li {
		vertical-align: super;
		background-color: #cecece;
		border: 1px solid black;
		border-right: 4px solid #333;
		border-bottom: 4px solid #555;
		box-shadow: 4px 4px 6px black;
		font-family: 'Bangers', 'Dosis', serif;
		height: 4rem;
		margin-bottom: 1rem;
		text-align: center;
		opacity: 0.6;
		position: fixed;
		transition: all 200ms ease-in;
		width: 9rem;

		@media (min-width: 40rem) {
			width: 8rem;
		}

		&:hover {
			opacity: 1;
			transition: opacity 200ms ease-out;
			text-shadow: 3px 3px 6px
				${props => props.theme.randomColor(backlightArray)};
		}

		&:active {
			background-color: #acacac;
			border-right: 4px solid #acacac;
			border-bottom: 4px solid #acacac;
			border: 1px solid #333;
			color: #333;
			opacity: 1;
			transition: all 100ms linear;
			transform: scale(0.9);
		}

		@media (min-width: 40rem) {
			left: 0;
			margin: 0;
			position: relative;
		}
	}

	.active {
		opacity: 1;
		text-shadow: 3px 3px 6px white;
	}

	.route-link {
		color: black;
		font-size: 2.4rem;
		font-weight: bold;
		height: 100%;
		letter-spacing: 1.5px;
		text-decoration: none;
		width: 9rem;

		&:hover {
			cursor: pointer;
		}
	}
`;

export const PageContainer = styled.div`
	background-color: #333;
	min-height: calc(100vh - 4.5rem);
	margin: 0;
	padding: 0;
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;

	@media (min-width: 40rem) {
		&:hover {
		}
	}

	div {
		max-width: 100vw;
	}
`;

export const ToggleContainer = styled.div`
	left: 0;
	margin: 0;
	padding: 0;
	position: fixed;
	top: 0;
	z-index: 3; 

	.toggle-outline {
		top 0;
		position: absolute;
		background-color: #222;
		box-shadow: 3px 3px 6px black;
		height: 3.2rem;
		opacity: 0.9;
		transition: all 200ms ease;
		width: 3.2rem;
		z-index: 3;
		
		&:hover {
			opacity: 1;
			text-shadow: 3px 3px 3px #bbb;
			transition: opacity 200ms ease;
		}
		
		&:active {
			opacity: 1;
			text-shadow: 3px 3px 3px #333;
			transition: all 100ms ease;
			transform: scale(0.9);
		}
		
	}
	
	button {
		background-color: #777;
		border: 2px solid #333;
		border-radius: 6px;
		border-right: 4px solid #222;
		border-bottom: 4px solid #555;
		box-shadow: inset 3px 3px 2px #bbb;
		cursor: pointer;
		display: block;
		height: 3.2rem;
		opacity: 0.9;
		outline: none;
		text-decoration: none;
		transition: all 200ms ease;
		width: 3.2rem;
		z-index: 4;
		
		&:hover {
			transition: all 200ms ease;
			text-shadow: 3px 3px 3px #aaa;
		}
		
		&:active {
			background-color: #555;
			box-shadow: inset 3px 3px 2px #777;
			color: #121212;
			border-right: 4px solid #555;
			border-bottom: 4px solid #555;
			opacity: 1;
			text-shadow: 3px 3px 3px #333;
			transition: all 100ms ease;
			transform: scale(0.9);
		}
	}
`;
