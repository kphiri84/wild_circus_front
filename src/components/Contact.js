import React from 'react';
import { Form } from 'semantic-ui-react';
import './contact.css';
import NavigBar from './NavigBar';
import NavigBar2 from './NavigBar2';
import bandeau from '../assets/bandeau1.jpg';

const Contact = () => {
	const token = localStorage.usertoken;
	return (
		<div className="App">
			{!token ? <NavigBar /> : <NavigBar2 />}
			<img className="bandeau" src={bandeau} alt="rond" />
			<h3 className="decal">CONTACT</h3>
			<p className="decale">
				Une question à nous poser ? Vous êtes au bon endroit ! N'hésitez pas à nous contacter via le formulaire
				suivant :
			</p>
			<Form>
				<Form.Group widths="equal">
					<Form.Input fluid label="Prénom" placeholder="Prénom" />
					<Form.Input fluid label="Nom" placeholder="Nom" />
					<Form.Input fluid label="Email" placeholder="Email" />
					<Form.Input fluid label="Numero de téléphone" placeholder="Numero de téléphone" />
				</Form.Group>
				<Form.TextArea label="Message" placeholder="Votre message ..." />
				<Form.Checkbox label="J'accepte les termes et conditions" />
				<Form.Button>Envoyer</Form.Button>
			</Form>
		</div>
	);
};

export default Contact;
