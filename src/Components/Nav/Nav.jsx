// import 'Components/Nav.css';
import React, { Fragment, useState } from 'react';
import { useRoutes } from 'hookrouter';
import useWindowDimensions from 'hooks/useWindowDimensions';
import NavList, { directions } from 'Components/Nav/NavList';
import routes from 'Lists/routes';
import Fade from 'react-reveal/Fade';
import { Backdrop, PageContainer, ToggleContainer } from 'Styles/Nav/NavStyles';

import Footer from 'Components/Nav/Footer';
import NotFoundPage from 'NotFound';

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	const routeResult = useRoutes(directions);
	const { height, width } = useWindowDimensions();

	const backgroundClickHandler = () => {
		if (isOpen) {
			setIsOpen(!isOpen);
		}
	};

	const toggleClickHandler = () => setIsOpen(!isOpen);

	return (
		<Fragment>
			<div>
				{width < 640 && (
					<Fragment>
						<ToggleContainer>
							<div className='toggle-outline'>
								<button
									className='fas fa-bars fa-2x drawer-handle'
									onClick={toggleClickHandler}
								></button>
							</div>
							<Fade
								when={isOpen}
								duration={200}
								left
								cascade
								collapse
								className='mobile-menu'
							>
								{NavList(routes)}
							</Fade>
						</ToggleContainer>
						<PageContainer
							onClick={backgroundClickHandler}
							isOpen={isOpen}
							width={width}
						>
							<Backdrop isOpen={isOpen}>
								{routeResult || <NotFoundPage />}
							</Backdrop>
						</PageContainer>
					</Fragment>
				)}
				{width > 639 && (
					<Fragment>
						<PageContainer
							onClick={backgroundClickHandler}
							isOpen={isOpen}
							width={width}
						>
							{NavList(routes)}
							{routeResult || <NotFoundPage />}
						</PageContainer>
					</Fragment>
				)}
			</div>
			<Footer ypos={height} width={width} />
		</Fragment>
	);
};

export default Nav;
