import * as boot from 'react-bootstrap';
import * as moment from 'moment';
import React, { useState, useEffect } from 'react';
import { DateTime } from 'react-datetime-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link, Box } from '@material-ui/core';
import Rating from 'material-ui-rating';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Navbar from '../../navbar/navbar';
import './owner.css';
var email = '';
var office_id = 0;
export default function Ownerpage() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const tokin = localStorage.usertoken;
		var decoded = jwt_decode(tokin);
		console.log(decoded);
		email = decoded.email;
		console.log(email);
	});

<<<<<<< HEAD
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.post('http://localhost:5000/getoffice', {
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
			<div className='ow1'>
				<Link href='/cal' onClick={console.log('kk')}>
					<Button variant='contained' color='primary'>
						CLENDER
					</Button>
				</Link>
				<Link href='/addOffice' onClick={console.log('kk')}>
					<Button variant='contained' color='primary'>
						ADD OFFICE
					</Button>
				</Link>
				<Link href='/bookingoffice' onClick={console.log('kk')}>
					<Button variant='contained' color='primary'>
						My Booking Office
					</Button>
				</Link>
			</div>
			<boot.Row className='rowOw'>
				{data.map((element, index) => {
					return (
						<boot.Card
							className='cardOw1'
							key={index}
							style={{ width: '18rem' }}
						>
							<boot.Card.Img variant='top' src={element.imgUrl} />
							<Box component='fieldset' mb={3} borderColor='transparent'>
								<Rating name='read-only' value={element.rating} readOnly />
							</Box>
							<boot.Card.Body>
								<boot.Card.Title>{element.Discription} </boot.Card.Title>
								<boot.Card.Text>{element.email}</boot.Card.Text>
								<Button
									variant='secondary'
									onClick={() => {
										office_id = element.office_id;
										console.log(office_id);
										axios
											.post('http://localhost:5000/deletoff', { office_id })
											.then(res => {
												console.log(res.data);
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
	);
}
=======
    useEffect(() => {
        
        const fetchData = async () => {
          const result = await axios.post(
            'http://localhost:5000/getoffice',{
                email
            }
          );
        console.log(result.data)
          setData(result.data.success);
  
        };
     
        fetchData(); 
    }, []);
    return( 
        <div>
            <Navbar/> 
            <br/>
    <Link href='/cal' onClick={console.log('kk')}>
        <Button variant='contained' color='primary'>
           CLENDER
        </Button>
    </Link>
    <Link href='/addOffice' onClick={console.log('kk')}>
        <Button variant='contained' color='primary'>
            ADD OFFICE
        </Button>
    </Link>
    <Link href='/bookingoffice' onClick={console.log('kk')}>
        <Button variant='contained' color='primary'>
            My Booking Office
        </Button>
    </Link>
    {data.map((element, index) => {
				return (
                    <boot.Container>
                    <boot.Row>
                    
                    <boot.Col>
                    <br/>
                    </boot.Col>
                    <boot.Col>
                        	<boot.Card  key = {index} style={{ width: '18rem' }}>
						<boot.Card.Img variant='top' src={element.imgUrl} />
						<boot.Card.Body>
							<boot.Card.Title>{element.Discription} </boot.Card.Title>
							
						</boot.Card.Body>
					</boot.Card>
                    <br/>
                    </boot.Col>
                    <boot.Col>
                    <boot.Card  key = {index} style={{ width: '18rem' }}>
						<boot.Card.Img variant='top' src={element.imgUrl} />
                   
        <Rating name="read-only" value={element.rating} readOnly />
      
						<boot.Card.Body>
							<boot.Card.Title>{element.Discription} </boot.Card.Title>
							<boot.Card.Text>
								{element.email}
							</boot.Card.Text>
                            < Button  variant="secondary" onClick={() => {
                                office_id  = element.office_id;
                                console.log(office_id)
						axios
						.post('http://localhost:5000/deletoff', {office_id})
						.then((res) => {
              console.log(res.data);
              window.location.reload(true);
    
						})
						.catch((err) => {
						  console.log(err);
            })
                      }}   >
            DELETE
          </Button>
						</boot.Card.Body>
					</boot.Card>
                    <br/>
                    </boot.Col>
            </boot.Row>
            </boot.Container>
				);
			})}
    </div>
    )}
>>>>>>> ff3bd4d684edf0e4f0bccef576ecf3455bb78c79
