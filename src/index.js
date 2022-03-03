import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { store } from './config/store';
import { Provider } from 'react-redux';
import { Button, Result } from 'antd';
import RoutesComponent from './Routes';
import { ErrorBoundary } from 'react-error-boundary';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const ErrorFallback = ({ error }) => (
	<Result
		status='warning'
		title='Something went wrong.'
		extra={
			<>
				<pre style={{ color: 'red' }}>{error.message}</pre>

				<Button type='primary' onClick={() => window.location.reload()}>
					Reload page
				</Button>
			</>
		}
	/>
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<ErrorBoundary FallbackComponent={ErrorFallback}>
					<RoutesComponent />
				</ErrorBoundary>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
