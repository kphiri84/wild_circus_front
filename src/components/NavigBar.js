import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import './nav.css';
import logo from '../assets/wildlogo.png';

const NavigBar = (props) => {
	return (
		<Navbar color="warning" light expand="md">
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
			<Link to="/reservations">
				<Button color="danger">Reservations</Button>
			</Link>
		</Navbar>
	);
};

export default NavigBar;
