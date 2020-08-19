import * as boot from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Navbar from "../../navbar/navbar";
import * as moment  from 'moment';

var email ='';

export default function Booking() {
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
            'http://localhost:5000/getbooking',{
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
    {data.map((element, index) => {
				return (
                    <boot.Container> 
                    <boot.Row>
                    
                    <boot.Col>
                    <br/>
                    </boot.Col>
                    <boot.Col>
                        	<boot.Card  key = {index} style={{ width: '18rem' }}>
                            <boot.Card.Title></boot.Card.Title>
                            <label>Email User :</label> {'   '}  <label>{element.emailuser}</label>
						
						<boot.Card.Body>
							<boot.Card.Title>{ moment(element.startdate).format('YYYY-MM-DD') }  </boot.Card.Title>
                            <boot.Card.Title>{ moment(element.enddate).format('YYYY-MM-DD')}</boot.Card.Title>
                            <label>phone User :</label> {'   '}  <label>{element.phoneuser}</label><br/>
						</boot.Card.Body>
					</boot.Card>
                    <br/>
                    </boot.Col>
                    <boot.Col>
							     <div>
   
       
	  </div>
    
							 
						
                    <br/>
                    </boot.Col>
            </boot.Row>
            </boot.Container>
				);
			})}
    </div>
    )}