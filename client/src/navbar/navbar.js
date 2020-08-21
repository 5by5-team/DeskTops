import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import axios from 'axios';
import { createBrowserHistory } from 'history'; /////////////

const history = createBrowserHistory(); //////////// give my pranch

class Bar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			location: '',
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event) {
		this.setState({ location: event.target.value });
	}

	handleSubmit(event) {
		console.log(this.state);
		const { location } = this.state;

		axios
			.post(`http://localhost:5000/registerowner`, { location })
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log('error', error);
				alert('Error');
			});
		event.preventDefault();
	}
	handleClick2() {
		localStorage.removeItem('usertoken');
		history.push('');
		window.location.reload();
	}
	render() {
		console.log(this.state);
		return (
			<ReactBootstrap.Navbar
				bg='light'
				expand='lg'
				className='navIN'
				fixed='top'
			>
				<ReactBootstrap.Navbar.Brand href='/landingPage'>
					BookingFinder
				</ReactBootstrap.Navbar.Brand>
				<ReactBootstrap.Navbar.Toggle aria-controls='basic-navbar-nav' />
				<ReactBootstrap.Navbar.Collapse id='basic-navbar-nav'>
					<ReactBootstrap.Nav className='ml-auto'>
						<ReactBootstrap.Nav.Link href='/landingPage'>
							Home
						</ReactBootstrap.Nav.Link>

						<ReactBootstrap.Nav.Link
							style={{ marginLeft: '' }}
							// href={this.handleClick2}
							// href={this.handleClick2}
							onClick={this.handleClick2}
						>
							logout
						</ReactBootstrap.Nav.Link>
						<ReactBootstrap.Nav.Link href='/map' style={{ marginLeft: '%' }}>
							map
						</ReactBootstrap.Nav.Link>
						{/* <ReactBootstrap.NavDropdown title='more' id='basic-nav-dropdown'>
							<ReactBootstrap.NavDropdown.Item href='#action/3.1'>
								about
							</ReactBootstrap.NavDropdown.Item>
							<ReactBootstrap.NavDropdown.Item href='#action/3.2'>
								contact us
							</ReactBootstrap.NavDropdown.Item>
						</ReactBootstrap.NavDropdown> */}
						<ReactBootstrap.Form.Control
							style={{}}
							as='select'
							defaultValue='Gaza'
							onChange={this.handleClick}
						>
							<option value='Gaza'>Gaza</option>
							<option value='KhanYounes'>KhanYounes</option>
							<option value='Rafah'>Rafah</option>
							<option value='Dair AlBalah'>Dair AlBalah</option>
							<option value='Beit Lahia'>Beit Lahia</option>
							<option value='Jabalia'>Jabalia</option>
						</ReactBootstrap.Form.Control>
						<ReactBootstrap.Button
							variant='outline-success'
							onClick={this.handleSubmit}
						>
							Search
						</ReactBootstrap.Button>
					</ReactBootstrap.Nav>
					<ReactBootstrap.Form inline></ReactBootstrap.Form>
				</ReactBootstrap.Navbar.Collapse>
			</ReactBootstrap.Navbar>
		);
	}
}
export default Bar;
