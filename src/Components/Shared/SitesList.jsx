import React, { useState } from 'react';
import Fade from 'react-reveal';
import styled from 'styled-components';

const Container = styled.div`
	background-color: black;
	border-top: 5px solid #555;
	border-left: 5px solid #555;
	border-right: 5px solid #444;
	border-bottom: 5px solid #444;
	border-radius: 20px;
	padding: 1rem;

	@media (min-width: 40rem) {
		width: 96vw;
	}

	@media (min-width: 40rem) {
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
	align-items: center;
	background-color: ${props => (props.color ? props.color : '#ccc')};
	border-bottom: 4px solid #333;
	border-radius: 6px;
	display: flex;
	flex-flow: column nowrap;
	font-size: ${props => (props.fontSize ? props.fontSize : 1)}rem;
	justify-content: center;
	margin: 2px 4px;
	opacity: 0.7;
	position: relative;
	text-align: center;
	transition: all 1s ease;
	vertical-align: middle;

	@media (min-width: 40rem) {
		width: calc(100% / 6);
	}

	@media (min-width: 66rem) {
		width: calc(100% / 8);
	}

	&:hover {
		box-shadow: 3px 3px 6px #666;
		opacity: 1;
		transform: scale(0.9);
		transition: all 200ms ease;
	}
`;

const SiteLabel = styled.h3`
	color: ${props => (props.color ? props.color : 'black')};
	font-family: 'Josefin Sans', sans-serif;
	font-size: ${props => (props.fontSize ? props.fontSize : 1)}rem;
	font-weight: bold;
	opacity: 0.7;
	transition: all 200ms ease;

	&:hover {
		color: white;
		opacity: 1;
		text-shadow: 2px 2px 5px black;
		transition: all 600ms ease;
		transform: scale(1.3);
	}
`;

const Item = ({ color, href, id, label, rel, target }) => {
	const [isActive, setIsActive] = useState(false);
	return (
		<SiteListItem
			className={`list-group-item ${isActive ? '' : ''}`}
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
