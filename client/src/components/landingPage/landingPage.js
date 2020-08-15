import React, { useState, useEffect } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import Nav from '../../navbar/navbar';
import Navbar from '../navbarlog/navbarlog';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
var email = '';
// import { setDate } from 'date-fns';
// import { request } from 'express';
function Home() {
	const [data, setData] = useState([]);
	const [navbar, setNavbar] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios('http://localhost:5000/getall');
			console.log(result.data.success);
			setData(result.data.success);
		};

		fetchData();
	}, []);
	useEffect(() => {
		const tokin = localStorage.usertoken;
		var decoded = jwt_decode(tokin);
		console.log(decoded);
		email = decoded.email;
		// email = '';
		console.log(email);
	});
	const on = () => {
		email === '' ? console.log(email) : setNavbar(<Navbar />);
		console.log(<Navbar />, 'naaaaaaaaaaaaaaaaaav');
		return <Navbar />;
	};
	return email === '' ? (
		<row>
			<Navbar />
			<ReactBootstrap.Container fluid='md'>
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
			</ReactBootstrap.Container>

			<br />
			<br />
			<ReactBootstrap.Container fluid='md'>
				<ReactBootstrap.Row>
					<ReactBootstrap.Col>
						<ReactBootstrap.Row>
							<ReactBootstrap.Col xs={6} md={4}>
								<ReactBootstrap.Card style={{ width: '18rem' }}>
									{data.map((element, index) => {
										return (
											<ReactBootstrap.Card.Body>
												<ReactBootstrap.Card.Img
													variant='top'
													src={element.imgUrl}
												/>
												<ReactBootstrap.Card.Title>
													Card Title
												</ReactBootstrap.Card.Title>
												<ReactBootstrap.Card.Text>
													Some quick example text to build on the card title and
													make up the bulk of the card's content.
												</ReactBootstrap.Card.Text>

												<ReactBootstrap.Button
													Link
													href='/login'
													variant='primary'
												>
													rent
												</ReactBootstrap.Button>
											</ReactBootstrap.Card.Body>
										);
									})}
								</ReactBootstrap.Card>
							</ReactBootstrap.Col>
						</ReactBootstrap.Row>
					</ReactBootstrap.Col>
				</ReactBootstrap.Row>
			</ReactBootstrap.Container>
		</row>
	) : (
		<row>
			<Nav />
			<ReactBootstrap.Container fluid='md'>
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
			</ReactBootstrap.Container>
			<br />
			<br />
			<ReactBootstrap.Container fluid='md'>
				<ReactBootstrap.Row>
					<ReactBootstrap.Col>
						<ReactBootstrap.Row>
							<ReactBootstrap.Col xs={6} md={4}>
								<ReactBootstrap.Card style={{ width: '18rem' }}>
									{data.map((element, index) => {
										return (
											<ReactBootstrap.Card.Body>
												<ReactBootstrap.Card.Img
													variant='top'
													src={element.imgUrl}
												/>
												<ReactBootstrap.Card.Title>
													Card Title
												</ReactBootstrap.Card.Title>
												<ReactBootstrap.Card.Text>
													Some quick example text to build on the card title and
													make up the bulk of the card's content.
												</ReactBootstrap.Card.Text>

												<ReactBootstrap.Button
													Link
													href='/login'
													variant='primary'
												>
													rent
												</ReactBootstrap.Button>
											</ReactBootstrap.Card.Body>
										);
									})}
								</ReactBootstrap.Card>
							</ReactBootstrap.Col>
						</ReactBootstrap.Row>
					</ReactBootstrap.Col>
				</ReactBootstrap.Row>
			</ReactBootstrap.Container>
		</row>
	);
}
export default Home;
