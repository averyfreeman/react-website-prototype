import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
import * as theme from 'Styles/Shared/styledThemes';
import {
	AppLogo,
	BottomRow,
	CenteredRow,
	CycleColor,
	Heading,
	backlightArray
} from 'Styles/Shared/PageStyles';
import Tables from 'Components/Shared/Tables';
import tutorials from 'Lists/tutorials';

const HeroImage = styled.img`
	border-radius: 50%;
	border: 5px solid #555;
	outline: black;
`;

const ContentContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
	margin-top: 3rem;
`;

const P = styled.p`
	color: ${props => theme.randomColor(backlightArray)};
	display: flex;
	flex-flow: column wrap;
	text-align: justify;
	text-shadow: 2px 2px 2px black;

	@media (min-width: 40rem) {
		margin-right: 20px;
		max-width: 10rem;
	}
`;

const About = props => {
	return (
		<Fragment>
			<CenteredRow width={'100%'} padding={'6rem 3rem'}>
				<Fade top duration={2000} when={true} appear={true}>
					<Heading color={theme.khaki} size={4}>
						Who is Avery Freeman?
					</Heading>
				</Fade>
				<div className='row'>
					<div className='col-md-4'>
						<Fade clear duration={6000} when={true} appear={true}>
							<HeroImage src='/images/me-cropped.jpg' />
						</Fade>
					</div>
					<div className='col-md-8'>
						<ContentContainer>
							<Fade right duration={1000} when={true} appear={true}>
								<P>I'm an aspiring web developer who loves using React.</P>
								<P>
									A few months ago I lost my job due to coronavirus and I've
									been working hard ever since to teach myself programming using
									Javascript and CSS.
								</P>
								<P>
									I've been studying 10-14 hours a day, 7 days a week (no,
									really!) because I understand how dire the situation is, and
									I'm extremely committed to learning as much as possible,
									approaching the issue with fervent tenacity and a
									indefatigable resolve.
								</P>
								<P>
									In the last 4 months I've completed the following tutorials
									(see below)
								</P>
								<P>
									But enough about me, let's push this app to GitHub pages and
									see how it works...
								</P>
							</Fade>
						</ContentContainer>
					</div>
				</div>
				<div className='mt-5'>
					<Tables tables={tutorials} />
				</div>
			</CenteredRow>
			<BottomRow heightMargin={6}>
				<CycleColor>
					<Fade bottom duration={6000} when={true} appear={true}>
						<AppLogo className='fab fa-react fa-3x' />
					</Fade>
					<Fade clear duration={3000} when={true} appear={true}>
						<div>Made with React</div>
					</Fade>
				</CycleColor>
			</BottomRow>
		</Fragment>
	);
};

export default About;
