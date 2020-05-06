import React, { Component } from 'react';
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ReactGA from 'react-ga';

import Home from '../pages/Home';
import Prices from '../pages/Prices';
import Contact from '../pages/Contact';
import History from '../pages/MyHistory';
import Error from '../pages/404';

const history = createHistory();
history.listen((location) => {
	ReactGA.set({ page: location.pathname });
	ReactGA.pageview(location.pathname);
});
class Router extends Component {
	componentDidMount() {
		ReactGA.pageview(window.location.pathname);
	}

	render() {
		return (
			<BrowserRouter history={history}>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/medium/mon-histoire' component={History} />
					<Route exact path='/medium/tarifs' component={Prices} />
					<Route exact path='/medium/contact' component={Contact} />
					<Route exact path='/404' component={Error} />
					<Redirect to='/404' />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default Router;
