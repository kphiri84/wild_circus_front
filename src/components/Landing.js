import React, { useState, useEffect } from 'react';
import NavigBar from './NavigBar';
import './nav.css';
import Home from './Home';
import NavigBar2 from './NavigBar2';

import AuthService from '../services/auth.service';

const Landing = (props) => {
	const [ currentUser, setCurrentUser ] = useState(undefined);

	useEffect(() => {
		const user = AuthService.getCurrentUser();

		if (user) {
			setCurrentUser(user);
		}
	}, []);

	return (
		<div>
			{!currentUser ? <NavigBar /> : <NavigBar2 />}
			<Home />
		</div>
	);
};

export default Landing;
