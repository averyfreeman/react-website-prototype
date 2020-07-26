import 'index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import * as theme from 'Styles/Shared/styledThemes';
import Nav from 'Components/Nav/Nav';
// eslint-disable-next-line
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';
// eslint-disable-next-line
import Popper from 'bootstrap/dist/js/popper';
// import * as serviceWorker from '__TEST__/serviceWorker';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Nav />
	</ThemeProvider>,
	document.getElementById('ROOT')
);
