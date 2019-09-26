import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import ResponsiveDrawer from './components/header.component';
import HomePage from './pages/homepage.component';
import SignInSide from './pages/sign-in.component';
import SignUpSide from './pages/sign-up.component';

const App = () => {
	return (
		<div className='App'>
			<ResponsiveDrawer></ResponsiveDrawer>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/signin' component={SignInSide} />
				<Route exact path='/signup' component={SignUpSide} />
			</Switch>
		</div>
	);
};

export default App;
