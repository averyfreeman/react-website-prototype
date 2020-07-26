import React, { Fragment } from 'react';
import styled from 'styled-components';
import Button from 'Components/Shared/Button';
// import { BacklightArray } from 'Styles/Nav/NavStyles';
import * as colors from 'Styles/Shared/styledThemes';

export const blocksArray = [
	colors.aqua,
	colors.oceanGreen,
	colors.capri,
	colors.yellow,
	colors.lightRed
];

const Background = styled.div`
	background-color: ${props => props.theme.regalBlue};
	display: flex;
	align-items: center;
	position: absolute;
	width: 100%;
`;

const ColorBlock = styled.div`
	padding: 0;
	margin: 0;
	height: 3rem;
	width calc(47% - 1.8rem);
	background-color: ${props => props.color};
`;

const ContentContainer = styled.div`
	flex: 2;
	flex-direction: row;
	align-content: center;
	max-width: 90%;
	padding-left: 5%;
	position: relative;

	@media (min-width: 40 rem) {
		width: 100%;
	}
`;

// width: calc(${props => (props.width = width)} - 20%);
const MainContent = styled.div`
	color: white;
	flex-direction: column;
	padding-bottom: 4rem;
	@media (min-width: 40rem) {
		padding: 0 1rem 0 1rem;
	}
`;

const SideBar = styled.div`
	justify-content: center;
	background-color: ${props => props.theme.dimGray};
	color: white;
	flex-flow: row wrap;
	// flex-direction: column;
	// padding-left: 3.6rem;
	position: relative;
	width: 100vw;
	p {
		margin-bottom: 1rem;
	}

	@media (min-width: 40 rem) {
		flex-flow: row nowrap;
		padding: 3.2rem 1rem 0 1rem;
	}
`;

const Article = props => {
	console.log('article width = ' + props.width);
	return (
		<Fragment>
			<Background>
				<ContentContainer width={props.width}>
					<MainContent>
						<h2>Main Content</h2>
						<p>
							<Button size='small'>Click me!</Button>
							<Button>Click me!</Button>
							<Button size='large'>Click me!</Button>
						</p>
						<Button block>Click me!</Button>
						<Button block noBorder>
							Click me!
						</Button>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Laudantium beatae vel nesciunt et, nisi voluptatem tempora
							doloribus iusto aspernatur, totam quisquam sint quaerat harum
							maiores ipsum, cupiditate error libero provident.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Laudantium beatae vel nesciunt et, nisi voluptatem tempora
							doloribus iusto aspernatur, totam quisquam sint quaerat harum
							maiores ipsum, cupiditate error libero provident.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Laudantium beatae vel nesciunt et, nisi voluptatem tempora
							doloribus iusto aspernatur, totam quisquam sint quaerat harum
							maiores ipsum, cupiditate error libero provident.
						</p>
					</MainContent>
					<SideBar>
						<p>
							Here's some theme colors from
							<a href='https://coolors.co'>coolors.co</a>
						</p>
						{blocksArray.map((color, idx) => (
							<ColorBlock key={idx} color={color} />
						))}
					</SideBar>
				</ContentContainer>
			</Background>
		</Fragment>
	);
};

export default Article;
