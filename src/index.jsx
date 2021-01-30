import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Notify from './components/Common/Notify';
import store from './store';
import { Routes } from './routes';
import './i18n';

const App = (
	<Provider store={store}>
		<Notify />
		<Routes />
	</Provider>
);

ReactDOM.render(App, document.getElementById('root'));
