import React from 'react';
import Fade from 'react-reveal';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gml } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import * as theme from 'Styles/Shared/styledThemes';
import { CenteredRow, Heading } from 'Styles/Shared/PageStyles';
import { codeExample1, codeExample2 } from 'Lists/CodeExamples';

const MaxWidth = styled.div`
	display: flex;
	flex-flow: row wrap;
	max-width: 100%;
	overflow: auto;
`;

const Code = props => {
	return (
		<CenteredRow heightMargin={12}>
			<Fade top duration={4000} when={true} appear={true}>
				<Heading color={theme.capri} heightMargin={6}>
					Site Code Snippets
				</Heading>
			</Fade>
			<div className='container text-left'>
				<div className='row'>
					<div className='col-md' id='#1'>
						<Fade clear duration={2000} when={true} appear={true}>
							<MaxWidth>
								<SyntaxHighlighter
									language='javascript'
									style={gml}
									wrapLines={true}
								>
									{codeExample1}
								</SyntaxHighlighter>
							</MaxWidth>
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
								Although I map arrays of objects in a few places in this
								prototype, I especially like how this one has a separate{' '}
								<code>item</code> component so it can dynamically add an{' '}
								<code>active</code> className on each <code>li</code> using{' '}
								<code>onMouseEnter</code>
							</p>
						</Fade>
					</div>
				</div>
			</div>
			<div className='container text-left'>
				<div className='row'>
					<div className='col-md' id='#2'>
						<Fade left duration={6000} when={true} appear={true}>
							<p>
								This is the directions object that lazy-imports pages if they're
								requested (saving resources on first site render)
							</p>
							<p>
								It's also the configuration for the URL endpoints and to which
								page component they direct traffic
							</p>
							<p>
								Lastly, the loading animation is snuggled in there for when
								there's a little lag - see it?
							</p>
						</Fade>
					</div>
					<div className='col-md'>
						<Fade clear duration={2000} when={true} appear={true}>
							<MaxWidth>
								<SyntaxHighlighter
									language='javascript'
									style={gml}
									wrapLines={true}
								>
									{codeExample2}
								</SyntaxHighlighter>
							</MaxWidth>
						</Fade>
					</div>
				</div>
			</div>
		</CenteredRow>
	);
};

export default Code;
