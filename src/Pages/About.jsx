import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import * as theme from 'Styles/Shared/styledThemes';
import {
	AppLogo,
	BottomRow,
	CenteredRow,
	CycleColor,
	Heading,
	HeroImage,
	SpacedFlexRow,
	Pcolumn
} from 'Styles/Shared/PageStyles';
import Tables from 'Components/Shared/Tables';
import tutorials from 'Lists/tutorials';
import { meCropped } from 'images/images';

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
							<HeroImage src={meCropped} />
						</Fade>
					</div>
					<div className='col-md-8'>
						<SpacedFlexRow>
							<Fade right duration={1000} when={true} appear={true}>
								<Pcolumn>
									I'm an aspiring web developer who loves using React.
								</Pcolumn>
								<Pcolumn>
									I've been an avid homelab enthusiast for the last decade, and
									do sidework in networking, security cameras, and computer
									troubleshooting.
								</Pcolumn>
								<Pcolumn>
									A few months ago I lost my job due to coronavirus and I've
									been working hard ever since to teach myself programming using
									Javascript and CSS.
								</Pcolumn>
								<Pcolumn>
									I've been studying 10-14 hours a day, 7 days a week (no,
									really!) because I understand how dire the situation is, and
									I'm extremely committed to learning as much as possible,
									approaching the issue with fervent tenacity and a
									indefatigable resolve.
								</Pcolumn>
								<Pcolumn>
									In the last 4 months I've completed the following tutorials
									(see below)
								</Pcolumn>
								<Pcolumn>
									But enough about me, let's push this app to GitHub pages and
									see how it works...
								</Pcolumn>
							</Fade>
						</SpacedFlexRow>
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
