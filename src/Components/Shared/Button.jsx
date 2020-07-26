import styled from 'styled-components';

const Button = styled.button`
	appearance: none;
	background-color: ${props => props.theme.regalBlue};
	border: ${props => (props.noBorder ? 'none' : '2px solid white;')};
	border-radius: 4px;
	color: white;
	margin: 0.5rem;
	padding: 0.25em 0.5em;
	transition: background-color 0.25s, color 0.25s;

	${props => {
		switch (props.size) {
			case 'small':
				return 'font-size: 12px;';
			case 'large':
				return 'font-size: 20px;';
			default:
				return 'font-size: 16px;';
		}
	}}

	${props => {
		if (props.block) {
			return `
      display: inline-block;
      width: 100%;
      `;
		}
	}} 

	&:hover {
		background-color: white;
		color: ${props => props.theme.regalBlue};
		cursor: pointer;
	}
`;

export default Button;
