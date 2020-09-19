import React, { useState, useRef } from 'react';
import { FormGroup } from 'reactstrap';
import NavigBar from './NavigBar';
import './connection.css';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

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

const Connection = (props) => {
	
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");

	const form = useRef();
	const checkBtn = useRef();

	const onChangeEmail = (e) => {
		const email = e.target.value;
		setEmail(email);
	};

	const onChangePassword = (e) => {
		const password = e.target.value;
		setPassword(password);
	};

	const handleLogin = (e) => {
		e.preventDefault();

		setMessage('');
		setLoading(true);

		form.current.validateAll();

		if (checkBtn.current.context._errors.length === 0) {
			AuthService.login(email, password).then(
				() => {
					props.history.push('/');
					window.location.reload();
				},
				(error) => {
					const resMessage =
						(error.response && error.response.data && error.response.data.message) ||
						error.message ||
						error.toString();

					setLoading(false);
					setMessage(resMessage);
				}
			);
		} else {
			setLoading(false);
		}
	};

	return (
		<div>
			<NavigBar />
			<h3>CONNEXION</h3>
			<Form className="connec" onSubmit={handleLogin} ref={form}>
				<FormGroup widths="equal" row>
					<Input
						type="email"
						name="email"
						id="exampleEmail"
						placeholder="Email"
						value={email}
                        onChange={onChangeEmail}
                        validations={[required]}
					/>
				</FormGroup>
				<FormGroup widths="equal" row>
					<Input
						type="password"
						name="password"
						id="examplePassword"
						placeholder="Mot de passe"
						value={password}
						onChange={onChangePassword}
                        validations={[required]}
					/>
				</FormGroup>
				<div className="form-group">
					<button className="btn btn-primary btn-block" disabled={loading}>
						{loading && <span className="spinner-border spinner-border-sm" />}
						<span>Se connecter</span>
					</button>
				</div>

				{message && (
					<div className="form-group">
						<div className="alert alert-danger" role="alert">
							{message}
						</div>
					</div>
				)}
				<CheckButton style={{ display: 'none' }} ref={checkBtn} />
			</Form>
		</div>
	);
};

export default Connection;
