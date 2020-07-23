import React from 'react';
import { Form } from 'semantic-ui-react';
import './contact.css'
import NavigBar from './NavigBar'
import bandeau from '../assets/bandeau1.jpg'

const Contact = () => {
  return (
    <div className="App">
      <NavigBar />
      <img className="bandeau" src={bandeau} alt="rond" />
      <h3>Contact</h3>
      <p>Une question à nous poser ? Vous êtes au bon endroit ! N'hésitez pas à nous contacter via le formulaire suivant :</p>
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Prénom' placeholder='Prénom' />
          <Form.Input fluid label='Nom' placeholder='Nom' />
          <Form.Input fluid label='Email' placeholder='Email' />
          <Form.Input fluid label='Numero de téléphone' placeholder='Numero de téléphone' />
        </Form.Group>
        <Form.TextArea label='Message' placeholder='Votre message ...' />
        <Form.Checkbox label="J'accepte les termes et conditions" />
        <Form.Button>Envoyer</Form.Button>
      </Form>
    </div>
  );
}

export default Contact;
