import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import SignInSide from './pages/sign-in/sign-in.component';
import SignUpSide from './pages/sign-up/sign-up.component';

const App = () => {
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/login' component={SignInSide} />
				<Route exact path='/signup' component={SignUpSide} />
			</Switch>
		</div>
	);
};

export default App;
