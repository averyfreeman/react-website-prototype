import React, { useState } from 'react';
import Fade from 'react-reveal';
import styled from 'styled-components';

const Container = styled.div`
	background-color: black;
	border: 5px solid #666;
	border-radius: 20px;
	padding: 1rem;

	@media (min-width: 40rem) {
		justify-content: center;
		width: 96vw;
	}

	@media (min-width: 40rem) {
		justify-content: center;
		width: 92vw;
	}
`;

const UnorderedList = styled.ul`
	display: flex;
	flex-flow: row wrap;
	text-decoration: none;

	@media (min-width: 40rem) {
		justify-content: center;
	}

	&:hover {
	}
`;

const SiteLink = styled.a`
	color: ${props => (props.color ? props.color : 'black')};
	text-decoration: none;

	&:hover {
	}
`;

const SiteListItem = styled.li`
	background-color: ${props => (props.color ? props.color : '#ccc')};
	border-bottom: 4px solid #333;
	border-radius: 6px;
	display: flex;
	flex-flow: column nowrap;
	font-size: ${props => (props.fontSize ? props.fontSize : 1)}rem;
	justify-content: center;
	opacity: 0.8;
	transition: all 1s ease;

	width: 100%;
	vertical-align: middle;

	@media (min-width: 40rem) {
		width: calc(100% / 3);
	}

	@media (min-width: 60rem) {
		width: calc(100% / 4);
	}

	&:hover {
		border-bottom: none;
		border-left: none;
		color: white;
		opacity: 1;
		text-shadow: 2px 2px 5px black;
		transform: scale(0.9);
		transition: all 200ms ease;
	}
`;

const SiteLabel = styled.h3`
	color: ${props => (props.color ? props.color : 'black')};
	font-family: 'Josefin Sans', sans-serif;
	font-size: ${props => (props.fontSize ? props.fontSize : 1)}rem;
	font-weight: bold;
	opacity: 0.6;
	transition: all 200ms ease;
	width: 100%;

	&:hover {
		color: white;
		opacity: 1;
		text-shadow: 2px 2px 5px black;
		transition: all 1s ease;
		transform: scale(1.2);
	}
`;

const Item = ({ color, href, id, label, rel, target }) => {
	const [isActive, setIsActive] = useState(false);
	return (
		<SiteListItem
			className={`list-group-item ${
				isActive ? 'list-group-item-action active' : ''
			}`}
			color={color}
			data-key={id}
			onMouseEnter={() => setIsActive(true)}
			onMouseLeave={() => setIsActive(false)}
		>
			<SiteLink href={href} rel={rel} target={target}>
				<SiteLabel fontSize={1.6}>{label}</SiteLabel>
			</SiteLink>
		</SiteListItem>
	);
};

const SitesList = ({ items }) => {
	return (
		<Fade clear duration={2000} when={true} appear={true}>
			<Container>
				<UnorderedList className='list-group list-group-horizontal text-center'>
					{items.map(itemProps => (
						<Item {...itemProps} key={itemProps.id} />
					))}
				</UnorderedList>
			</Container>
		</Fade>
	);
};

export default SitesList;
