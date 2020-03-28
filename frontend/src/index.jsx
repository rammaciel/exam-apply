/* eslint-disable global-require */
/* eslint-disable react/no-render-return-value */
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import i18n from './i18n';
import store from './store';
import theme from './theme';
import GlobalStyles from './theme/global';
import { history } from './services';

import App from './App';

const render = (Component) =>
	ReactDOM.render(
		<Provider store={store}>
			<I18nextProvider i18n={i18n}>
				<Router history={history}>
					<ThemeProvider theme={theme}>
						<Component />
						<GlobalStyles />
						<ToastContainer autoClose={3000} />
					</ThemeProvider>
				</Router>
			</I18nextProvider>
		</Provider>,
		document.getElementById('root')
	);

render(App);

if (module.hot) {
	module.hot.accept('./App', () => {
		const NextApp = require('./App').default;
		render(NextApp);
	});
}
