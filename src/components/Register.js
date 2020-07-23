import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import { register } from './UserFonctions'
import NavigBar from "./NavigBar";

const Register = (props) => {


    const [newFirstname, setNewFirstname] = useState('')
    const [newLastname, setNewLastname] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
  
    const createUser = (e) => {
        e.preventDefault()
  
      const newUser = {
          firstname: newFirstname,
          lastname: newLastname,
          email: newEmail,
          password: newPassword
      }
  
      register(newUser).then(res => {
          console.log('Registered')
      })
    }



  return (
      <div id="RegisterBody">
          <NavigBar />
            <Form id="connectForm" noValidate onSubmit={createUser}>
            <FormGroup row>
                    <Input
                        type="text"
                        name="prenom"
                        id="examplePrenom"
                        placeholder="Prenom"
                        value={newFirstname}
                        onChange={(e) => setNewFirstname(e.target.value)}
                    />
                </FormGroup>
                <FormGroup row>
                    <Input
                        type="text"
                        name="nom"
                        id="exampleNom"
                        placeholder="Nom"
                        value={newLastname}
                        onChange={(e) => setNewLastname(e.target.value)}
                    />
                </FormGroup>
              <FormGroup row>
                  <Input
                      type="newEmail"
                      name="newEmail"
                      id="exampleNewEmail"
                      placeholder="Email"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                  />
              </FormGroup>
              <FormGroup row>
                  <Input
                      type="password"
                      name="newPassword"
                      id="exampleNewPassword"
                      placeholder="Mot de passe"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                  />
              </FormGroup>
              <div className='register-page-buttons'>
                  <Button className="button-confirm" type='submit' >S'inscrire</Button>
                
                </div>
            </Form> 
      </div>
  );
};
export default Register;