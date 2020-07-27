import React, { lazy, Suspense } from 'react';
import { A } from 'hookrouter';
import { css } from '@emotion/core';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { LoaderContainer, NavContainer } from 'Styles/Nav/NavStyles';

import Root from 'Pages/Root';
const About = lazy(() => import('Pages/About'));
const Sites = lazy(() => import('Pages/Sites'));
const Blog = lazy(() => import('Pages/Blog'));
const Code = lazy(() => import('Pages/Code'));

// TODO: dynamic routes w/ Array.reduce() and Object.assign()
// export const directions = routes.reduce(
// 	(object, Item) =>
// 		Object.assign(object, { [Item.href]: () => <Item.label /> }),
// 	{}
// );
// console.log(directions);

const override = css`
	transform: scale(3);
	opacity: 0.9;
`;

export const directions = {
	'/react-website-prototype/': () => <Root />,
	'/react-website-prototype/About': () => (
		<Suspense
			fallback={
				<LoaderContainer>
					<ScaleLoader
						css={override}
						size={35}
						color={'black'}
						loading={true}
					/>
				</LoaderContainer>
			}
		>
			<About />
		</Suspense>
	),
	'/react-website-prototype/Sites': () => (
		<Suspense
			fallback={
				<LoaderContainer>
					<ScaleLoader
						css={override}
						size={35}
						color={'black'}
						loading={true}
					/>
				</LoaderContainer>
			}
		>
			<Sites />
		</Suspense>
	),
	'/react-website-prototype/Blog': () => (
		<Suspense
			fallback={
				<LoaderContainer>
					<ScaleLoader
						css={override}
						size={35}
						color={'black'}
						loading={true}
					/>
				</LoaderContainer>
			}
		>
			<Blog />
		</Suspense>
	),
	'/react-website-prototype/Code': () => (
		<Suspense
			fallback={
				<LoaderContainer>
					<ScaleLoader
						css={override}
						size={35}
						color={'black'}
						loading={true}
					/>
				</LoaderContainer>
			}
		>
			<Code />
		</Suspense>
	)
};

const NavList = (routes, toggleClickHandler) => {
	// console.log('NavList width = ' + props);
	return (
		<NavContainer>
			<ul>
				{routes.map(({ key, href, label }) => (
					<A
						href={href}
						key={key}
						className='route-link'
						onClick={toggleClickHandler}
					>
						<li className={href === window.location.pathname ? 'active' : null}>
							{label}
						</li>
					</A>
				))}
			</ul>
		</NavContainer>
	);
};

export default NavList;
