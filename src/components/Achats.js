import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'semantic-ui-react';
import NavigBar from './NavigBar';
import NavigBar2 from './NavigBar2';
import './achats.css';
import axios from 'axios';
import AuthService from '../services/auth.service';

const Achats = () => {
	const [ billet, setBillet ] = useState([]);

	useEffect(() => {
		getBillet();
	}, []);

	const [ category, setCategory ] = useState('');
	const [ quantity, setQuantity ] = useState(0);
	const [ quantity2, setQuantity2 ] = useState(0);
	const [ quantity3, setQuantity3 ] = useState(0);
	const [ currentUser, setCurrentUser ] = useState(undefined);

	useEffect(() => {
		const user = AuthService.getCurrentUser();

		if (user) {
			setCurrentUser(user);
		}
	}, []);

	let tAdult = 0;
	let tChildren = 0;
	let tReduit = 0;
	let totale = 0;

	const getQuantity2 = (e) => {
		setQuantity2(e.target.value);
	};

	const getQuantity3 = (e) => {
		setQuantity3(e.target.value);
	};

	const getQuantity = (e) => {
		setQuantity(e.target.value);
	};

	const getBillet = () => {
		axios.get('http://localhost:3001/billets').then((response) => setBillet(response.data));
	};

	const postRegister = (e) => {
		e.preventDefault();
		const newReser = {
			reservationDate: new Date(),
			sessionStart: '2020-12-12',
			sessionEnd: '2020-12-12',
			adults: quantity,
			children: quantity3,
			reduit: quantity2,
			price: totale,
			category: category,
			userId: currentUser.id
		};
		console.log(newReser);
		axios.post('http://localhost:3001/reservations', newReser).then(alert('Reservation bien enregistré'));
	};

	return (
		<div className="App">
			{!currentUser ? <NavigBar /> : <NavigBar2 />}
			<Container>
				<Col md="12">
					<Row className="tarif">
						<Col md="8">
							<h3>CATEGORIES</h3>
							{billet.map((f) => (
								<div onClick={() => setCategory(f.category)} className="tour">
									<p>{f.category}</p>
								</div>
							))}
						</Col>
						{billet.filter((f) => f.category === category).map((j) => {
							return (
								<Col className="recap" md="4">
									{console.log(category)}
									<h3 className="center recaptable">Récapitulatif</h3>
									<h4 className="center recaptable"> {j.category}</h4>
									<br />
									<form onSubmit={postRegister}>
										<table className="recaptable">
											<tbody>
												<tr height="25px">
													<td className="para">Adultes</td>
													<td className="para">
														<select>
															<option onClick={(e) => getQuantity(e)} value={0}>
																0
															</option>
															<option onClick={(e) => getQuantity(e)} value={1}>
																1
															</option>
															<option onClick={(e) => getQuantity(e)} value={2}>
																2
															</option>
															<option onClick={(e) => getQuantity(e)} value={3}>
																3
															</option>
															<option onClick={(e) => getQuantity(e)} value={4}>
																4
															</option>
															<option onClick={(e) => getQuantity(e)} value={5}>
																5
															</option>
															<option onClick={(e) => getQuantity(e)} value={6}>
																6
															</option>
															<option onClick={(e) => getQuantity(e)} value={7}>
																7
															</option>
															<option onClick={(e) => getQuantity(e)} value={8}>
																8
															</option>
															<option onClick={(e) => getQuantity(e)} value={9}>
																9
															</option>
															<option onClick={(e) => getQuantity(e)} value={10}>
																10
															</option>
														</select>
													</td>
													<td className="nombres" valign="middle" align="right">
														{' '}
														{(tAdult = j.adults * quantity)}€
													</td>
												</tr>
												<tr height="25px">
													<td className="para">Enfants</td>
													<td className="para">
														<select>
															<option onClick={(e) => getQuantity3(e)} value={0}>
																0
															</option>
															<option onClick={(e) => getQuantity3(e)} value={1}>
																1
															</option>
															<option onClick={(e) => getQuantity3(e)} value={2}>
																2
															</option>
															<option onClick={(e) => getQuantity3(e)} value={3}>
																3
															</option>
															<option onClick={(e) => getQuantity3(e)} value={4}>
																4
															</option>
															<option onClick={(e) => getQuantity3(e)} value={5}>
																5
															</option>
															<option onClick={(e) => getQuantity3(e)} value={6}>
																6
															</option>
															<option onClick={(e) => getQuantity3(e)} value={7}>
																7
															</option>
															<option onClick={(e) => getQuantity3(e)} value={8}>
																8
															</option>
															<option onClick={(e) => getQuantity3(e)} value={9}>
																9
															</option>
															<option onClick={(e) => getQuantity3(e)} value={10}>
																10
															</option>
														</select>
													</td>
													<td className="nombres" valign="middle" align="right">
														{(tChildren = j.children * quantity3)}€
													</td>
												</tr>
												<tr height="25px">
													<td className="para">Tarifs</td>
													<td className="para">
														<select>
															<option onClick={(e) => getQuantity2(e)} value={0}>
																0
															</option>
															<option onClick={(e) => getQuantity2(e)} value={1}>
																1
															</option>
															<option onClick={(e) => getQuantity2(e)} value={2}>
																2
															</option>
															<option onClick={(e) => getQuantity2(e)} value={3}>
																3
															</option>
															<option onClick={(e) => getQuantity2(e)} value={4}>
																4
															</option>
															<option onClick={(e) => getQuantity2(e)} value={5}>
																5
															</option>
															<option onClick={(e) => getQuantity2(e)} value={6}>
																6
															</option>
															<option onClick={(e) => getQuantity2(e)} value={7}>
																7
															</option>
															<option onClick={(e) => getQuantity2(e)} value={8}>
																8
															</option>
															<option onClick={(e) => getQuantity2(e)} value={9}>
																9
															</option>
															<option onClick={(e) => getQuantity2(e)} value={10}>
																10
															</option>
														</select>
													</td>
													<td className="nombres" valign="middle" align="right">
														{(tReduit = j.reduit * quantity2)}€
													</td>
												</tr>
											</tbody>
											<tfoot>
												<tr height="25px">
													<td className="para">TOTAL :</td>
													<td id="recup" className="nombres" valign="middle" align="right">
														<p value={totale}>{(totale = tReduit + tAdult + tChildren)}€</p>
													</td>
												</tr>
											</tfoot>
										</table>
										<Button type="submit">Valider</Button>
									</form>
								</Col>
							);
						})}
					</Row>
				</Col>
			</Container>
		</div>
	);
};

export default Achats;
