import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import './nav.css'

const NavigBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    
      <Navbar color="warning" light expand="md">
        <NavbarBrand href="/">Wild Circus</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Tarifs">Tarifs</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Horaires">Horaire/Accès</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/compte">Mon compte</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
            <NavItem>
              <NavLink href="/connection">Se connecter</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register">S'inscrire</NavLink>
            </NavItem>
            <Link to="/reservations">
            <Button color="danger">Reservations</Button>
            </Link>
      </Navbar>
    
  );
}

export default NavigBar;
