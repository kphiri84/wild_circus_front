import React from 'react';
import NavigBar from './NavigBar';
import './nav.css';
import Home from './Home';
import NavigBar2 from './NavigBar2';

const Landing = (props) => {
	const token = localStorage.usertoken;
	return (
		<div>
			{!token ? <NavigBar /> : <NavigBar2 />}
			<Home />
		</div>
	);
};

export default Landing;
