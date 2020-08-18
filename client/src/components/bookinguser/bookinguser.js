import * as boot from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import * as moment from 'moment';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Navbar from '../../navbar/navbar';
import CardActions from '@material-ui/core/CardActions';
import Rating from 'material-ui-rating';
import CardContent from '@material-ui/core/CardContent';
import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import './booking.css';
var email = '';
var booking_id = 0;
var emailowner = '';
var ratingnumber = 0;
var valueofstart = 0;
var office_id = 0;
const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		'& > * + *': {
			marginTop: theme.spacing(1),
		},
	},
}));
export default function Bookinguser() {
	const classes = useStyles();
	const [data, setData] = useState([]);
	const [star, setStar] = useState(0);
	const [show2, setShow2] = useState(false);
	const handleClose2 = () => setShow2(false);
	const handleShow2 = () => setShow2(true);
	const handlestar = () => {
		setStar(star);
	};
	useEffect(() => {
		const tokin = localStorage.usertoken;
		var decoded = jwt_decode(tokin);
		console.log(decoded);
		email = decoded.email;
		console.log(email);
	});

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.post('http://localhost:5000/getbookinguser', {
				email,
			});
			console.log(result.data);
			setData(result.data.success);
		};

		fetchData();
	}, []);
	return (
		<div>
			<Navbar />

			<div className='div1'>
				<boot.Row className='bookUs'>
					{data.map((element, index) => {
						return (
							<boot.Card key={index} style={{ width: '18rem' }}>
								<boot.Card.Title>{element.emailowner}</boot.Card.Title>

								<boot.Card.Body>
									<boot.Card.Title>
										{moment(element.startdate).format('YYYY-MM-DD')}{' '}
									</boot.Card.Title>
									<boot.Card.Title>
										{moment(element.enddate).format('YYYY-MM-DD')}{' '}
									</boot.Card.Title>
									<Button
										variant='secondary'
										onClick={() => {
											booking_id = element.booking_id;
											emailowner = element.emailowner;
											const booking = {
												booking_id,
												emailowner,
												email,
											};

											axios
												.post('http://localhost:5000/deletebooking', booking)
												.then(res => {
													console.log(res);
													window.location.reload(true);
												})
												.catch(err => {
													console.log(err);
												});
										}}
									>
										DELETE
									</Button>
								</boot.Card.Body>
							</boot.Card>
						);
					})}
				</boot.Row>
			</div>
		</div>
	);
}
