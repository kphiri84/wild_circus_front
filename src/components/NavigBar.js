import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import './nav.css';
import logo from '../assets/wildlogo.png';

const NavigBar = (props) => {
	const [ isOpen, setIsOpen ] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<Navbar color="warning" light expand="md">
			<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
			<NavbarBrand href="/">
				<img className="logo" src={logo} alt="logo" />
			</NavbarBrand>
			<Nav className="mr-auto" navbar>
				<NavItem>
					<Link to="/">ACCUEIL</Link>
				</NavItem>
				<NavItem>
					<Link to="/tarifs">TARIFS</Link>
				</NavItem>
				<NavItem>
					<Link to="/contact">CONTACT</Link>
				</NavItem>
			</Nav>
			<NavItem>
				<Link to="/connection">SE CONNECTER</Link>
			</NavItem>
			<NavItem>
				<Link to="/register">S'INSCRIRE</Link>
			</NavItem>
			</Collapse>
		</Navbar>
	);
};

export default NavigBar;
