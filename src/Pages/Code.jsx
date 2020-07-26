import React from 'react';
import Fade from 'react-reveal';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gml } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import * as theme from 'Styles/Shared/styledThemes';
import { CenteredRow, Heading } from 'Styles/Shared/PageStyles';

const Code = props => {
	const codeExample = `
	const sites = [
		{ label: 'StackOverflow', href: 'https://stackoverflow.com' },
		{ label: 'rwieruch', href: 'https://www.robinwieruch.de/blog' },
		            . . . 
		{ label: 'VMWare Knowledge Base', href: 'https://kb.vmware.com/s/' }
	].map((site, idx) => {
		site.target = '_blank';
		site.rel = 'noopener noreferrer';
		site.id = site.label.slice(0, 3)} + '-'  + idx;
		return site;
	});

const Item = ({ color, href, id, label, rel, target }) => {
	const [isActive, setIsActive] = useState(false);
	return (
		<SiteListItem
			className={'list-group-item' + {
				isActive ? 'list-group-item-action active' : ''}}
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
		<UnorderedList className='list-group text-center'>
			{items.map(itemProps => (
				<Item {...itemProps} key={itemProps.id} />
			))}
		</UnorderedList>
	);
};

export default SitesList;
`;

	return (
		<CenteredRow heightMargin={12}>
			<Fade top duration={4000} when={true} appear={true}>
				<Heading color={theme.capri} heightMargin={6}>
					Site Code Snippets
				</Heading>
			</Fade>
			<div className='container text-left'>
				<div className='row'>
					<div className='col-md'>
						<Fade clear duration={2000} when={true} appear={true}>
							<SyntaxHighlighter language='javascript' style={gml}>
								{codeExample}
							</SyntaxHighlighter>
						</Fade>
					</div>
					<div className='col-md'>
						<Fade right duration={6000} when={true} appear={true}>
							<p>
								This is a component that reads in an array of objects of
								websites and maps their names, URLs and a few other attributes
								into list items
							</p>
							<p>
								Although I map arrays of objects in a few places in the
								wireframe, I especially like how this one has a separate{' '}
								<code>item</code> component so it can dynamically add an{' '}
								<code>active</code> className on each <code>li</code> using{' '}
								<code>onMouseEnter</code>
							</p>
						</Fade>
					</div>
				</div>
			</div>
		</CenteredRow>
	);
};

export default Code;
