import React, { useState, useRef } from 'react';
import { Button, FormGroup } from 'reactstrap';
import NavigBar from './NavigBar';
import './register.css';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail } from 'validator';

import AuthService from '../services/auth.service';

const required = (value) => {
	if (!value) {
		return (
			<div className="alert alert-danger" role="alert">
				This field is required!
			</div>
		);
	}
};

const validEmail = (value) => {
	if (!isEmail(value)) {
		return (
			<div className="alert alert-danger" role="alert">
				This is not a valid email.
			</div>
		);
	}
};

const vpassword = (value) => {
	if (value.length < 6 || value.length > 40) {
		return (
			<div className="alert alert-danger" role="alert">
				The password must be between 6 and 40 characters.
			</div>
		);
	}
};

const Register = (props) => {
	
	const form = useRef();
	const checkBtn = useRef();

	const [ pseudo, setPseudo ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ successful, setSuccessful ] = useState(false);
	const [ message, setMessage ] = useState('');

	const onChangePseudo = (e) => {
		const pseudo = e.target.value;
		setPseudo(pseudo);
	};

	const onChangeEmail = (e) => {
		const email = e.target.value;
		setEmail(email);
	};

	const onChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};

	const handleRegister = (e) => {
		e.preventDefault();

		setMessage('');
		setSuccessful(false);

		form.current.validateAll();

		if (checkBtn.current.context._errors.length === 0) {
			AuthService.register(pseudo, email, password).then(
				(response) => {
					setMessage(response.data.message);
					setSuccessful(true);
				},
				(error) => {
					const resMessage =
						(error.response && error.response.data && error.response.data.message) ||
						error.message ||
						error.toString();

					setMessage(resMessage);
					setSuccessful(false);
				}
			);
		}
	};

	return (
		<div id="RegisterBody">
			<NavigBar />
			<h3>INSCRIPTION</h3>
			<Form id="connectForm" onSubmit={handleRegister} ref={form}>
				<FormGroup row>
					<Input
						type="text"
						name="prenom"
						id="examplePrenom"
						placeholder="Prenom"
						value={pseudo}
						onChange={onChangePseudo}
					/>
				</FormGroup>
				<FormGroup row>
					<Input
						type="newEmail"
						name="newEmail"
						id="exampleNewEmail"
						placeholder="Email"
						value={email}
						onChange={onChangeEmail}
						validations={[ required, validEmail ]}
					/>
				</FormGroup>
				<FormGroup row>
					<Input
						type="password"
						name="newPassword"
						id="exampleNewPassword"
						placeholder="Mot de passe"
						value={password}
						onChange={onChangePassword}
						validations={[ required, vpassword ]}
					/>
				</FormGroup>
				<div className="register-page-buttons">
					<Button className="button-confirm" type="submit">
						S'inscrire
					</Button>
				</div>
				{message && (
					<div className="form-group">
						<div className={successful ? 'alert alert-success' : 'alert alert-danger'} role="alert">
							{message}
						</div>
					</div>
				)}
				<CheckButton style={{ display: 'none' }} ref={checkBtn} />
			</Form>
		</div>
	);
};
export default Register;
