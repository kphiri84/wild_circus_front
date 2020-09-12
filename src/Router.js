import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Profile from './components/Profile';
import Horaire from './components/Horaire';
import Tarifs from './components/Tarifs';
import MonCompte from './components/MonCompte';
import Contact from './components/Contact';
import Reservations from './components/Reservations';
import MyReservations from './components/MyReservations';
import Connection from './components/Connection';
import Register from './components/Register';
import Achats from './components/Achats';

const Router = () => {
	const token = localStorage.usertoken;
	return (
		<Switch>
			<Route exact path="/" component={Landing} />
			<Route path="/profile" component={Profile} />
			<Route path="/horaires" component={Horaire} />
			<Route path="/tarifs" component={Tarifs} />
			<Route path="/contact" component={Contact} />
			<Route path="/reservations" component={Reservations} />
			<Route path="/mesreservations" component={MyReservations} />
			<Route path="/compte" component={MonCompte} />
			<Route path="/connection" component={Connection} />
			<Route path="/register" component={Register} />
			<Route path="/achats" component={Achats} />
		</Switch>
	);
};
export default Router;
