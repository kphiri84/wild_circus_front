import React, { useState} from 'react';
import {login} from './UserFonctions'
import {
  Button,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import NavigBar from './NavigBar';

const Connection = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    const testLogin = (e) =>{
      e.preventDefault()

      const user = {
          email : email,
          password : password
      }
      
      
      login(user).then(res => {
          if(res) {
              window.location.reload(false);
          }
      })

  }
  
  return (
    <div className="App">
      <NavigBar />
      <Form noValidate onSubmit={testLogin}>
          <FormGroup row>
              <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
          </FormGroup>
          <FormGroup row>
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
              <Button className="boutonSecondaireModale" >
                  Annuler
                  </Button>
                  
          </div>
      </Form>
    </div>
  );
}

export default Connection;
