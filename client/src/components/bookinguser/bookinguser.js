import * as boot from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import * as moment from 'moment';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Navbar from '../../navbar/navbar';
import './booking.css';
var email = '';
var booking_id = 0;
var emailowner = '';
export default function Bookinguser() {
	const [data, setData] = useState([]);

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
