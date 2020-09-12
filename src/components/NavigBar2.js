import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Button, Icon, Modal, Header } from 'semantic-ui-react';
import './nav.css';
import { useHistory } from 'react-router-dom';
import logo from '../assets/wildlogo.png';

const NavigBar2 = (props) => {
	let history = useHistory();

	const logOut = (e) => {
		e.preventDefault();
		localStorage.removeItem('usertoken');
		history.push(`/`);
		window.location.reload(false);
	};
	const [ open, setOpen ] = React.useState(false);
	return (
		<div>
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
						<NavLink href="/compte">MON COMPTE</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/contact">CONTACT</NavLink>
					</NavItem>
				</Nav>
				<Link to="/reservations">
					<Button color="red">
						<Icon name="calendar outline" />Reservations
					</Button>
				</Link>
				<Modal
					closeIcon
					open={open}
					trigger={
						<a href="#">
							<Icon name="power off" className="power" />
						</a>
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
			</Navbar>
		</div>
	);
};

export default NavigBar2;
