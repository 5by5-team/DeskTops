import React, { useState, useEffect } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import Navbar from '../navbar/navbar';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
var email = '';
function IF() {
	const [navbar, setNavbar] = useState([]);
	const [data1, setData1] = useState([]);
	console.log(data1, 'first oneeeeeeeeeeeeeeeeeeee');

	useEffect(() => {
		// const result =
		axios
			.get('http://localhost:5000/getall')
			.then(res => {
				console.log(res.data.success, 'hereeeeeeeeeeeeeeeeeeeee');
				setData1(res.data.success);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);
	useEffect(() => {
		const tokin = localStorage.usertoken;
		var decoded = jwt_decode(tokin);

		email = decoded.email;
	});
	const on = () => {
		email === '' ? console.log(email) : setNavbar(<Navbar />);
		console.log(<Navbar />, 'naaaaaaaaaaaaaaaaaav');
		return <Navbar />;
	};

	return navbar == '' ? (
		<div>
			<h1>hello word</h1>
			<button onClick={on}>login</button>
			{/* <div>{setNavbar}</div> */}
		</div>
	) : (
		navbar
	);
}
export default IF;
