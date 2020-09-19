import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
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
					<NavLink href="/">ACCUEIL</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/Tarifs">TARIFS</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/contact">CONTACT</NavLink>
				</NavItem>
			</Nav>
			<NavItem>
				<NavLink href="/connection">SE CONNECTER</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/register">S'INSCRIRE</NavLink>
			</NavItem>
			</Collapse>
		</Navbar>
	);
};

export default NavigBar;
