import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
	box-sizing: border-box;
	position: fixed;
	left: 0;
	bottom: 0;
	border-top: 2px solid #222;
	justify-content: center;
	overflow: hidden;
	padding: 0;
	height: 4.6rem;
	right: 0;
	width: 100vw;
	background-color: #444;
	box-shadow: inset 3px 3px 3px #666;
	color: white;
	text-shadow: 2px 2px 3px black;
	justify-content: flex-end;
	flex: 0 nowrap;

	.footer-container {
		height: 100%;
		width: 100%;
	}

	.copy-container {
		font-size: 0.8rem;
		margin: 0;
		padding: 0;
		position: relative;
		width: vw;
		text-align: center;
		overflow: hidden;

		i {
			font-size: 0.725rem;
		}

		@media (min-width: 40rem) {
			border-radius: 6px;
			position: absolute;
			font-size: 0.9rem;
			width: 4rem;
			height: 4rem;
			right: 30px;
			top: 0.2rem;
			flex: 2 nowrap;
			justify-content: right;
			text-align: right;

			i {
				font-size: 0.825rem;
			}
		}
	}
`;

const SocialIcons = styled.div`
	left: 0;
	padding: 4px 0 0 0;
	margin: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	position: relative;
	overflow: hidden;
	width: 96%;
	z-index: 1;

	@media (min-width: 40rem) {
		justify-content: space-around;
		width: calc(96vw - 4rem);
		align-content: middle;
	}

	@media (min-width: 60rem) {
		width: calc(100vw - 4rem);
		align-content: middle;
	}

	.icon-anchor {
		color: white;
		margin-left: 0.5rem;
		opacity: 0.6;
		text-decoration: none;
		transition: all 100ms ease;

		&:hover {
			color: white;
			opacity: 1;
			transition: all 200ms ease;
		}

		&:active {
			color: #acacac;
			transform: scale(1.1);

			border: 1px solid #222;
			opacity: 1;
			text-shadow: 3px 3px 6px black;
			transition: all 100ms linear;
			transform: scale(0.9);
		}
	}
`;

const Footer = ({ width, ypos }) => {
	const iconSize = width < 639 ? 'fa-3x' : 'fa-4x';

	return (
		<Background>
			<div className='footer-container'>
				<SocialIcons>
					<a
						className='icon-anchor'
						href='https://github.com/averyfreeman'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className={`fab fa-github-square ${iconSize}`}></i>
					</a>
					<a
						className='icon-anchor'
						href='https://facebook.com/avery.freeman'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className={`fab fa-facebook-square ${iconSize}`}></i>
					</a>

					<a
						className='icon-anchor'
						href='https://twitter.com/UnixGreybeard'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className={`fab fa-twitter-square ${iconSize}`}></i>
					</a>
					<a
						className='icon-anchor'
						href='https://linkedin.com/in/averyfreeman/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className={`fab fa-linkedin ${iconSize}`}></i>
					</a>
					<a
						className='icon-anchor'
						href='mailto:contact@averyfreeman.com?subject=ghpages-react-js'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className={`fas fa-envelope-square ${iconSize}`}></i>
					</a>
				</SocialIcons>

				<div className='copy-container'>
					<i className='far fa-copyright'></i>&nbsp;{new Date().getFullYear()}{' '}
					Avery Freeman
				</div>
			</div>
		</Background>
	);
};

export default Footer;
