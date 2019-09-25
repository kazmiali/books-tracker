import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
	return (
		<div>
			<h1>HomePage</h1>
			<Link to='/signup'>Go to Sign Up</Link>
			<Link to='/signin'>Go to Sign In</Link>
		</div>
	);
};

export default HomePage;
