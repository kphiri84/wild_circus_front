import React from 'react';
import NavigBar2 from './NavigBar2';
import { Tab } from 'semantic-ui-react';
import MyReservations from './MyReservations';
import Profile from './Profile';

const panes = [
	{
		menuItem: 'Mon profil',
		render: () => (
			<Tab.Pane attached={false}>
				<Profile />
			</Tab.Pane>
		)
	},
	{
		menuItem: 'Mes reservations',
		render: () => (
			<Tab.Pane attached={false}>
				<MyReservations />
			</Tab.Pane>
		)
	}
];

const MonCompte = () => {
	return (
		<div className="App">
			<NavigBar2 />
			<Tab menu={{ secondary: true, pointing: true }} panes={panes} />
		</div>
	);
};

export default MonCompte;
