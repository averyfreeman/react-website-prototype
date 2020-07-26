import React from 'react';
import Fade from 'react-reveal/Fade';
import * as theme from 'Styles/Shared/styledThemes';
import {
	AppLogo,
	BottomRow,
	CenteredRow,
	Constrain,
	CycleColor,
	Heading,
	TextStyling
} from 'Styles/Shared/PageStyles';

const websiteGif = require('../images/website-collaboration-800-500.gif');

const Root = props => {
	return (
		<CenteredRow heightMargin={6}>
			<Fade top duration={2000} when={true} appear={true}>
				<Heading color={theme.capri} size={4} heightMargin={6}>
					In the beginning...
				</Heading>
			</Fade>
			<div className='text-center'>
				<Fade clear duration={6000} when={true} appear={true}>
					<Constrain>
						<img
							src={websiteGif}
							className='img-fluid'
							alt='website wireframe animation'
						/>
					</Constrain>
				</Fade>
			</div>
			<Fade bottom duration={4000} when={true} appear={true}>
				<Heading color={theme.oceanGreen} size={3} heightMargin={6}>
					...there was a wireframe
				</Heading>
			</Fade>
			<div className='row'>
				<div className='col-md col-sm text-center mb-5'>
					<Fade clear duration={1000} when={true} appear={true}>
						<img
							src={'/images/web-development-512.png'}
							className='img-fluid text-center'
							alt={'web development clip art'}
						/>
					</Fade>
				</div>
				<div className='col-md col-sm text-left mb-5'>
					<TextStyling>
						<Fade right duration={1000} when={true} appear={true}>
							<p>
								This is a prototype of a standardized website outline I'm
								working on
							</p>
							<p>
								It has front-end routing endpoints featuring lazy-loading and
								dynamic route extensibility (icons, buttons, styles, formatting,
								color themes)
							</p>
							<p>
								Styling done by hand using styled-components, bootstrap v5 for
								layout system
							</p>
							<ul>
								<h3>Basic features:</h3>
								<li>hookrouter for routing / browser url endpoints</li>
								<br />
								<li>
									styled components for CSS in JS (with lots of neat, extensible
									features)
								</li>
								<br />
								<li>
									bootstrap grid v5 for rapid prototyping of responsive layout
								</li>
							</ul>
						</Fade>
					</TextStyling>
				</div>
			</div>
			<div className='row'>
				<div className='col-md order-2 col-sm text-center mb-5'>
					<Fade clear duration={1000} when={true} appear={true}>
						<img
							src='/images/rainy-weather-512.png'
							className='img-fluid text-center'
							alt='web development clip art'
						/>
					</Fade>
				</div>
				<div className='col-md col-sm order-1 text-left mb-5'>
					<TextStyling>
						<Fade left duration={1000} when={true} appear={true}>
							<p>
								This prototype will soon be configured to accept any manner of
								content, folder structure, and theme, for rapid development of
								new sites
							</p>
							<ol>
								<h3>Next steps:</h3>
								<li>
									Connect the styled components theming engine with&nbsp;
									<a
										href='https://coolors.co'
										target='_blank'
										rel='noopener noreferrer'
									>
										coolors.co
									</a>
									&nbsp; so we can easily import color schemes from their
									website
								</li>
								<br />
								<li>
									Make UI elements (buttons, icons, etc.) generic and reusable,
									acquiring label and style attributes via props
								</li>
								<br />
								<li>
									Design reusable layout style components that render content
									from json
								</li>
								<br />
								<li>
									Implement reusable dynamic containers that make images conform
									universally
								</li>
								<br />
								<li>
									<del>Add code syntax highlighting engine</del>
								</li>
								<br />
								<li>Create a toggler between light and dark modes</li>
								<br />
								<li>
									<del>Add some more animations for transitions</del>
								</li>
							</ol>
						</Fade>
					</TextStyling>
				</div>
			</div>
			<BottomRow>
				<CycleColor>
					<Fade bottom duration={6000} when={true} appear={true}>
						<AppLogo className='fab fa-react fa-3x' />
					</Fade>
					<Fade clear duration={3000} when={true} appear={true}>
						<div>Made with React</div>
					</Fade>
				</CycleColor>
			</BottomRow>
		</CenteredRow>
	);
};

export default Root;
