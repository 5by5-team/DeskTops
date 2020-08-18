import * as boot from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Navbar from '../../navbar/navbar';
import './book.css';
var email = '';

export default function Booking() {
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
			const result = await axios.post('http://localhost:5000/getbooking', {
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

			<boot.Row className='rowBook'>
				{data.map((element, index) => {
					return (
						<boot.Card key={index} style={{ width: '18rem' }}>
							<boot.Card.Title>{element.emailuser}</boot.Card.Title>

							<boot.Card.Body>
								<boot.Card.Title>{element.startdate} </boot.Card.Title>
								<boot.Card.Title>{element.enddate} </boot.Card.Title>
							</boot.Card.Body>
						</boot.Card>
					);
				})}
			</boot.Row>
		</div>
	);
}
