import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './App';
import './styles/_global.scss';

render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById('root')
);
