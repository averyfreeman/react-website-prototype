import React from 'react';
import * as theme from 'Styles/Shared/styledThemes';
import { CenteredRow, Heading } from 'Styles/Shared/PageStyles';
import { penguin } from 'images/images';

const NotFoundPage = () => (
	<CenteredRow width={'100%'} padding={'6rem'}>
		<Heading color={theme.capri} heightMargin={3}>
			Page not found ...
		</Heading>
		<div className='text-center'>
			<img src={penguin} className='img-fluid' alt='penguin character' />
		</div>
		<CenteredRow heightMargin={4} className='center'>
			<button
				className='btn btn-outline-danger'
				onClick={() => window.history.go(-1)}
			>
				Go Back
			</button>
		</CenteredRow>
	</CenteredRow>
);

export default NotFoundPage;
