import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import history from './utils/history';

/**
|--------------------------------------------------
| Import components
|--------------------------------------------------
*/
import Header from './components/Header/Header';

/**
 |--------------------------------------------------
 | Import containers
 |--------------------------------------------------
 */
import MoviesList from './containers/MoviesList';
import MovieDetails from './containers/MovieDetail';

const { Content } = Layout;

const RoutesComponent = () => {
	return (
		<Router history={history}>
			<Layout className='site-layout' style={{ minHeight: '100vh' }}>
				<Header />
				<Content style={{ minHeight: 'fit-content' }}>
					<Switch>
						<Route path='/' exact component={MoviesList} />
						<Route path='/:id' exact component={MovieDetails} />
					</Switch>
				</Content>
			</Layout>
		</Router>
	);
};

export default RoutesComponent;
