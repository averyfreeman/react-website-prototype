import React, { Fragment } from 'react';
import Fade from 'react-reveal';
import * as theme from 'Styles/Shared/styledThemes';
import SitesList from 'Components/Shared/SitesList';
import sites from 'Lists/sites';
import {
	AppLogo,
	BottomRow,
	CenteredRow,
	ChalkBoard,
	CycleColor,
	Heading,
	SiteBadge,
	SiteLink
} from 'Styles/Shared/PageStyles';
import { develmonkIcon, trenchIcon } from 'images/images';

const Blog = () => {
	return (
		<Fragment>
			<CenteredRow width={'100%'} padding={'6rem 2rem'}>
				<Fade top duration={6000} when={true} appear={true}>
					<Heading color={theme.aqua} size={4} heightMargin={3}>
						Got Blog?
					</Heading>
				</Fade>
				<div className='row'>
					<div className='col-md col-sm-12 text-center'>
						<Fade clear duration={4000} when={true} appear={true}>
							<SiteBadge>
								<SiteLink
									href='https://develmonk.com'
									target='_blank'
									rel='noopener noreferrer'
									className='blog-link'
								>
									<img
										src={develmonkIcon}
										width='120px'
										height='92.5px'
										alt='developer monkey website@develmonk.com'
									/>
									DEVELOPER MONKEY
								</SiteLink>
							</SiteBadge>
						</Fade>
					</div>
					<div className='col-md col-sm-12'>
						<Fade right duration={2000} when={true} appear={true}>
							<ChalkBoard color={theme.myrtleGreen} className=''>
								<Heading color={theme.oceanGreen} size={2} heightMargin={1}>
									General interests
								</Heading>
								<p>
									If you'd like to read a bit about my interests, I have a blog
									where occassionally I write about devops and hypervisors
								</p>
							</ChalkBoard>
						</Fade>
					</div>
				</div>
				<div className='row text-center'>
					<div className='col-md order-2 col-sm-12 order-1 text-center'>
						<Fade left duration={4000} when={true} appear={true}>
							<ChalkBoard color={theme.capri}>
								<Heading color={theme.lightNavy} size={2} heightMargin={1}>
									Tech Experience
								</Heading>
								<p>
									If you're interested in my tech skills, I have a promotional
									site
								</p>
							</ChalkBoard>
						</Fade>
					</div>
					<div className='col-md order-1 col-sm-12 order-2 text-center'>
						<Fade clear duration={8000} when={true} appear={true}>
							<SiteBadge>
								<SiteLink
									href='https://averyfreeman.com'
									target='_blank'
									rel='noopener noreferrer'
									className='blog-link'
								>
									<img
										src={trenchIcon}
										width='120px'
										height='96px'
										alt='link to averyfreeman.com'
									/>
									AVERYFREEMAN COM
								</SiteLink>
							</SiteBadge>
						</Fade>
					</div>
				</div>
			</CenteredRow>
			<div style={{ margin: 0, paddingLeft: '5px' }}>
				<div className='row text-center'>
					<div className='d-flex flex-column align-items-center'>
						<Heading Heading color={theme.capri} size={3} heightMargin={1}>
							Favorite reading:
						</Heading>
						<SitesList items={sites} />
					</div>
				</div>
			</div>
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

export default Blog;
