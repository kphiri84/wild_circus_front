import React, { useEffect, useState } from 'react';
import NavigBar from './NavigBar';
import './reservations.css';
import { Link } from 'react-router-dom';
import NavigBar2 from './NavigBar2';

import AuthService from '../services/auth.service';

const Reservations = () => {
	const [ currentUser, setCurrentUser ] = useState(undefined);

	useEffect(() => {
		const user = AuthService.getCurrentUser();

		if (user) {
			setCurrentUser(user);
		}
	}, []);
	return (
		<div className="App">
			{!currentUser ? <NavigBar /> : <NavigBar2 />}
			<div className="bandeau" />
			<div className="superpose">
				<div>
					<p className="descrip">Durée du spectacle :</p>
					<p className="descriptif">2 heures</p>
				</div>
				<div>
					<p className="descrip">Public :</p>
					<p className="descriptif">Tout public, 3 ans et plus</p>
				</div>
			</div>
			<div className="all">
				<div className="tournee">
					<h3>EN TOURNEE</h3>

					<div className="tour">
						<Link to="/achats">
							<p className="town">AVIGNON</p>
							<p>20 août 2020</p>
							{/* <div className="arrow">
          <Icon name='arrow right' className="arrow"/>
          </div> */}
						</Link>
					</div>

					<div className="tour">
						<Link to="/achats">
							<p className="town">AIX-EN-PROVENCE</p>
							<p>20 septembre 2020</p>
						</Link>
					</div>
					<div className="tour">
						<Link to="/achats">
							<p className="town">MARSEILLE</p>
							<p>20 octobre 2020</p>
						</Link>
					</div>
					<div className="tour">
						<Link to="/achats">
							<p className="town">MONTPELLIER</p>
							<p>20 novembre 2020</p>
						</Link>
					</div>
					<div className="tour">
						<Link to="/achats">
							<p className="town">LYON</p>
							<p>20 decembre 2020</p>
						</Link>
					</div>
					<div className="tour">
						<Link to="/achats">
							<p className="town">PARIS</p>
							<p>20 janvier 2021</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Reservations;
