import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react';
import './myreservations.css';
import axios from 'axios';

const MyReservations = () => {
	const [ reservation, setReservation ] = useState([]);

	useEffect(() => {
		getReservation();
	}, []);
	const getReservation = () => {
		axios.get('http://localhost:3001/reservations').then((response) => setReservation(response.data));
	};
	return (
		<div className="App">
			<Table celled>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Reservation</Table.HeaderCell>
						<Table.HeaderCell>Date</Table.HeaderCell>
						<Table.HeaderCell>Heure</Table.HeaderCell>
						<Table.HeaderCell>Categories</Table.HeaderCell>
						<Table.HeaderCell>Nombres de personnes</Table.HeaderCell>
						<Table.HeaderCell>Prix</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				{reservation.map((e) => (
					<Table.Body>
						<Table.Row>
							<Table.Cell>{e.id}</Table.Cell>
							<Table.Cell>{e.reservationDate}</Table.Cell>
							<Table.Cell>16h-18h</Table.Cell>
							<Table.Cell>{e.category}</Table.Cell>
							<Table.Cell>
								<p className="reserv">Adultes : {e.adults}</p>
								<p className="reserv">Enfants : {e.children}</p>
								<p className="reserv">Tarifs réduits : {e.reduit}</p>
							</Table.Cell>
							<Table.Cell>{e.price} €</Table.Cell>
						</Table.Row>
					</Table.Body>
				))}
			</Table>
		</div>
	);
};

export default MyReservations;
