import Bar from '../bar/Bar';
import * as boot from 'react-bootstrap';
// import { Grid, TextField, Link } from '@material-ui/core';
import MediaCard from '../rentPage/rentPage'
import * as moment  from 'moment';


import { Backdrop } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
// import nodemailer from 'nodemailer';
import Modal from '@material-ui/core/Modal';
import { DateTime } from 'react-datetime-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'date-fns';   
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { Link ,Box} from '@material-ui/core'; 
import Rating from 'material-ui-rating'
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';  
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Navbar from "../../navbar/navbar";
var email ='';

export default function Ownerpage() {
    const [data, setData] = useState([]);

    useEffect(() => {
		const tokin = localStorage.usertoken;
		var decoded = jwt_decode(tokin); 
    console.log(decoded);
    email =decoded.email;
    console.log(email);
	});

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
    <Link href='/calender' onClick={console.log('kk')}>
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
					{/* <boot.Card  key = {index} style={{ width: '18rem' }}>
						<boot.Card.Img variant='top' src={element.imgUrl} />
						<boot.Card.Body>
							<boot.Card.Title>{element.Discription} </boot.Card.Title>
							<boot.Card.Text>
								Some quick example text to build on the card title and make up
								the bulk of the card's content
							</boot.Card.Text>
							<boot.Button variant='primary'>Rent</boot.Button>
						</boot.Card.Body>
					</boot.Card> */}
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
                        <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name="read-only" value={element.rating} readOnly />
      </Box>   
						<boot.Card.Body>
							<boot.Card.Title>{element.Discription} </boot.Card.Title>
							<boot.Card.Text>
								{element.email}
							</boot.Card.Text>
							     <div>
   
       
	  </div>
    
							 
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