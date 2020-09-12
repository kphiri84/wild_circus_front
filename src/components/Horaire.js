import React from 'react';
import NavigBar from './NavigBar';
import bandeau from '../assets/bandeau4.jpg';
import './horaire.css';
import NavigBar2 from './NavigBar2';

const Horaire = () => {
	const token = localStorage.usertoken;
	return (
		<div className="App">
			{!token ? <NavigBar /> : <NavigBar2 />}
			<img className="bandeau" src={bandeau} alt="rond" />
		</div>
	);
};

export default Horaire;
