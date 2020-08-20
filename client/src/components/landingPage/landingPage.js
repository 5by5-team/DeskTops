import React, { useState, useEffect } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import Nav from '../../navbar/navbar';
import Navbar from '../navbarlog/navbarlog';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import '../landingPage/index.css';

// import { makeStyles } from '@material-ui/core/styles';

import {
	ClickAwayListener,
	Button,
	open,
	Portal,
	classes,
	makeStyles,
} from '@material-ui/core';
import { TimerSharp } from '@material-ui/icons';
var email = '';
const useStyles = makeStyles(theme => ({
	dropdown: {
		position: 'fixed',
		width: 200,
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		border: '1px solid',
		padding: theme.spacing(1),
		backgroundColor: theme.palette.background.paper,
	},
}));
// import { setDate } from 'date-fns';
// import { request } from 'express';
function Home() {
	const [data, setData] = useState([]);
	const [navbar, setNavbar] = useState([]);
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [location, setLocation] = useState([]);
	const handleClick = () => {
		setOpen(prev => !prev);
	};

	const handleClick3 = e => {
		setLocation(e.target.value);
	};
	const handleClickAway = () => {
		setOpen(false);
	};

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('http://localhost:5000/getall');
			console.log(result.data.success, 'hhhhhhhhhhhhhhhhhhh');
			setData(result.data.success);
		};

		fetchData();
	}, []);
	useEffect(() => {
		const tokin = localStorage.usertoken;
		if (tokin) {
			var decoded = jwt_decode(tokin);
			console.log(decoded);
			email = decoded.email;
			// email = '';
			console.log(email);
		} else {
			console.log('no token found');
		}
	});

	return email === '' ? (
		// return (
		<div>
			<Navbar />
			<div className='c5' backgroundImage=''>
				{/* <a href='/landingPage'>
					<h1
						style={{
							fontFamily: ' Sofia',
							marginLeft: ' 517px',
							marginTop: '-42px',
							color: 'rgb(31 100 185);',
						}}
					>
						bookingFinder
					</h1>
				</a>
				<ClickAwayListener onClickAway={handleClickAway}>
					<div className='butlan2'>
						<Button variant='contained' color='secondary' onClick={handleClick}>
							Secondary
						</Button>
						{open ? (
							<Portal>
								<div className={classes.dropdown}>
									<Button href='/login'>as Custumer</Button>
									<Button href='/loginForOwner'>as Owner</Button>
								</div>
							</Portal>
						) : null}
					</div>
				</ClickAwayListener> */}
			</div>
			<div className='c4'>
				{/*  */}
				<ReactBootstrap.Container className='c0' fluid='md'>
					<ReactBootstrap.Row>
						{data.map((element, index) => {
							return (
								<ReactBootstrap.Card style={{ width: '18rem' }}>
									<ReactBootstrap.Card.Body>
										<ReactBootstrap.Card.Img
											variant='top'
											src={element.imgUrl}
										/>

										<ReactBootstrap.Button Link href='/login' variant='primary'>
											rent
										</ReactBootstrap.Button>
									</ReactBootstrap.Card.Body>
								</ReactBootstrap.Card>
							);
						})}
					</ReactBootstrap.Row>
				</ReactBootstrap.Container>
			</div>
			<footer style={{ backgroundColor: 'black' }}>
				<h1>khg</h1>
			</footer>
		</div>
	) : (
		<div>
			<Nav />
			<div className='c5'>
				<ReactBootstrap.Form.Control
					style={{}}
					as='select'
					defaultValue='Gaza'
					onChange={handleClick3}
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
					// onClick={this.handleSubmit}
				>
					Search
				</ReactBootstrap.Button>
			</div>

			<div className='c4'>
				{/*  */}
				<ReactBootstrap.Container className='c0' fluid='md'>
					<ReactBootstrap.Row>
						{data.map((element, index) => {
							return (
								<ReactBootstrap.Card style={{ width: '18rem' }}>
									<ReactBootstrap.Card.Body>
										<ReactBootstrap.Card.Img
											variant='top'
											src={element.imgUrl}
										/>

										<ReactBootstrap.Button Link href='/login' variant='primary'>
											rent
										</ReactBootstrap.Button>
									</ReactBootstrap.Card.Body>
								</ReactBootstrap.Card>
							);
						})}
					</ReactBootstrap.Row>
				</ReactBootstrap.Container>
			</div>
		</div>
	);
}
export default Home;
{
	/* <div className='class4'> */
}
{
	/* <Navbar /> */
}
{
	/* <ReactBootstrap.Container fluid='md'>
				<ReactBootstrap.Row>
					<ReactBootstrap.Col>
						<ReactBootstrap.Carousel cl>
							{data.map((element, index) => {
								console.log(element, 'elemmmmntttt');
								return (
									<ReactBootstrap.Carousel.Item>
										<img
											className='d-block w-100'
											src={element.imgUrl}
											alt='First slide'
										/>
										<ReactBootstrap.Carousel.Caption>
											<h3>First slide label</h3>
											<p>{element.Discription}</p>
										</ReactBootstrap.Carousel.Caption>
									</ReactBootstrap.Carousel.Item>
								);
							})}
						</ReactBootstrap.Carousel>
					</ReactBootstrap.Col>
				</ReactBootstrap.Row>
			</ReactBootstrap.Container> */
}
{
	/* </div> */
}