import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavbarText } from 'reactstrap';
import { Button, Icon, Modal, Header } from 'semantic-ui-react';
import './nav.css';
import logo from '../assets/wildlogo.png';
import AuthService from '../services/auth.service';
import { useHistory } from 'react-router-dom';
const NavigBar2 = (props) => {
	let history = useHistory();
	const [ isOpen, setIsOpen ] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const logOut = () => {
		AuthService.logout();
		history.push(`/`)
	};

	const [ open, setOpen ] = React.useState(false);
	return (
		<div>
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
							<Link to="/Tarifs">TARIFS</Link>
						</NavItem>
						<NavItem>
							<Link to="/compte">MON COMPTE</Link>
						</NavItem>
						<NavItem>
							<Link to="/contact">CONTACT</Link>
						</NavItem>
					</Nav>
					<NavbarText>
						<Link to="/reservations">
							<Button color="red">
								<Icon name="calendar outline" />Reservations
							</Button>
						</Link>
						</NavbarText>
						<NavbarText>
						<Modal
							closeIcon
							open={open}
							trigger={
								<Button className="ButtonTransparent">
									<Icon name="power off" className="power" />
								</Button>
							}
							onClose={() => setOpen(false)}
							onOpen={() => setOpen(true)}
							size={'tiny'}
						>
							<Header content="DECONNEXION" />
							<Modal.Content>
								<p>Voulez-vous vraiment vous déconnecter?</p>
							</Modal.Content>
							<Modal.Actions>
								<Button color="red" onClick={() => setOpen(false)}>
									<Icon name="remove" /> Non
								</Button>
								<Button color="green" onClick={logOut}>
									<Icon name="checkmark" /> Oui
								</Button>
							</Modal.Actions>
						</Modal>
						</NavbarText>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default NavigBar2;
