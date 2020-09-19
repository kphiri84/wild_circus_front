import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import './myreservations.css';
import axios from 'axios';
import AuthService from '../services/auth.service';

const MyReservations = () => {
	const [ reservation, setReservation ] = useState([]);
	const [ currentUser, setCurrentUser ] = useState(undefined);

	useEffect(() => {
		const user = AuthService.getCurrentUser();

		if (user) {
			setCurrentUser(user);
		}
	}, []);

	useEffect(() => {
		getReservation();
	}, []);
	const getReservation = () => {
		axios.get('http://localhost:3001/reservations').then((response) => setReservation(response.data));
	};
	return (
		<div className="App">
			<Table>
				<thead>
					<tr>
						<th>Reservation</th>
						<th>Date</th>
						<th>Heure</th>
						<th>Categories</th>
						<th>Nombres de personnes</th>
						<th>Prix</th>
					</tr>
				</thead>

				{reservation.filter((f) => f.userId === currentUser.id).map((e) => (
					<tbody>
						<tr>
							<td>{e.id}</td>
							<td>{e.reservationDate}</td>
							<td>16h-18h</td>
							<td>{e.category}</td>
							<td>
								<p className="reserv">Adultes : {e.adults}</p>
								<p className="reserv">Enfants : {e.children}</p>
								<p className="reserv">Tarifs réduits : {e.reduit}</p>
							</td>
							<td>{e.price} €</td>
						</tr>
					</tbody>
				))}
			</Table>
		</div>
	);
};

export default MyReservations;
