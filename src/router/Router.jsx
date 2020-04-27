import React, { Component } from 'react';
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Prices from '../pages/Prices';
import Contact from '../pages/Contact';
import History from '../pages/MyHistory';
import Error from '../pages/404';

class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/medium/' component={Home} />
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
