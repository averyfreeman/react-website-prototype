import React from 'react';
// import { A } from 'hookrouter';
import * as theme from 'Styles/Shared/styledThemes';
import { CenteredRow, Heading } from 'Styles/Shared/PageStyles';

const Sites = () => (
	<CenteredRow CenteredRow width={'100%'} padding={'6rem'}>
		<Heading heightMargin={3} color={theme.oceanGreen}>
			Published Sites
		</Heading>
		<Heading heightMargin={3} color={theme.yellow}>
			<span>.∙◦•°∞ COMING SOON ∞°•◦∙.</span>
		</Heading>
	</CenteredRow>
);

export default Sites;
