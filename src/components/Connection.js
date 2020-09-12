import React, { useState } from 'react';
import { login } from './UserFonctions';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import NavigBar from './NavigBar';
import './connection.css';
import { useHistory } from 'react-router-dom';

const Connection = () => {
	let history = useHistory();
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const testLogin = (e) => {
		e.preventDefault();
		history.push(`/`);
		const user = {
			email: email,
			password: password
		};

		login(user).then((res) => {
			if (res) {
				window.location.reload(false);
			}
		});
	};

	return (
		<div>
			<NavigBar />
			<h3>CONNEXION</h3>
			<Form className="connec" noValidate onSubmit={testLogin}>
				<FormGroup widths="equal" row>
					<Input
						type="email"
						name="email"
						id="exampleEmail"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</FormGroup>
				<FormGroup widths="equal" row>
					<Input
						type="password"
						name="password"
						id="examplePassword"
						placeholder="Mot de passe"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</FormGroup>
				<div className="modal-bouton">
					<Button className="boutonSecondaireModale" type="submit">
						Se connecter
					</Button>
					<Button className="boutonSecondaireModale">Annuler</Button>
				</div>
			</Form>
		</div>
	);
};

export default Connection;
