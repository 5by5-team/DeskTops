import Navbar from '../../navbar/navbar';
import * as boot from 'react-bootstrap';
import * as moment from 'moment';
import React, { useState, useEffect } from 'react';
import { DateTime } from 'react-datetime-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { CardMedia } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { Link, Box } from '@material-ui/core';
import {
	KeyboardDatePicker,
	MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Rating from 'material-ui-rating';
var item = {};
var email = '';
var phoneuser = 0;
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
var valueofstart = 0;

function CustemarPage() {
	const classes = useStyles();
	const [star, setStar] = useState(0);
	const handlestar = () => {
		setStar(star);
	};
	const [selectedDate, setSelectedDate] = useState(new Date('2020-08-18'));
	const [selectedDate2, setSelectedDate2] = useState(new Date('2020-08-18'));
	const [data, setData] = useState([]);

	const handleDateChange = date => {
		setSelectedDate(date);
	};

	const handleDateChange2 = date => {
		setSelectedDate2(date);
	};
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
		phoneuser = decoded.phone;
		console.log(email);
	});

  const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [show, setShow] = useState(false);
	const [show2, setShow2] = useState(false);
	const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    
    return (
        <div>
         <Navbar />
          <br />
          <div >
            {' '}
            <Link href='/bookinguser' onClick={console.log('kk')}>
              <Button style={{ marginLeft: 580, backgroundColor: '#00848C' , marginTop:'70px' }} variant='contained' color='primary'>
                My Booking Office
              </Button>
            </Link>
          </div>
          <boot.Row style={{ marginLeft: 95 }}>
            <br />
            {data.map((element, index) => {
              return (
                <boot.Row>
                  <boot.Container>
                    <br />
                    <br />
                    <boot.Card key={index} style={{ width: '18rem' }}>
                      <boot.Card.Img variant='top' src={element.imgUrl} />
                      <Box component='fieldset' mb={3} borderColor='transparent'>
                        <Rating name='read-only' value={element.rating} readOnly />
                      </Box>
                      <boot.Card.Body>
                        <boot.Card.Title style={{ marginLeft: "10px"}}> { element.Discription } </boot.Card.Title>
                        <boot.Card.Text  style={{ marginLeft: "10px"}}> { element.email }</boot.Card.Text>
                        <boot.Card.Text  style={{ marginLeft: "200px"}}> { element.price }{'$'}</boot.Card.Text>

	{/* Features */}
    <br />
										<label>Features:</label>
										<br />
										{element.Vip_wifi === 1 ? (
											<input id='checkbox3' type='checkbox' checked='true' />
										) : (
											<input id='checkbox_id' type='checkbox' checked={false} />
										)}
										{'   '}
										<label>Vip_wifi</label> <br />
										{element.coffeeandtea === 1 ? (
											<input id='checkbox3' type='checkbox' checked='true' />
										) : (
											<input id='checkbox_id' type='checkbox' checked={false} />
										)}
										{'   '}
										<label>coffeeandtea</label> <br />
										{element.conditioning === 1 ? (
											<input id='checkbox3' type='checkbox' checked='true' />
										) : (
											<input id='checkbox_id' type='checkbox' checked={false} />
										)}
										{'   '}
										<label>conditioning</label> <br />
										{element.ele === 1 ? (
											<input id='checkbox3' type='checkbox' checked='true' />
										) : (
											<input id='checkbox_id' type='checkbox' checked={false} />
										)}
										{'   '}
										<label>24 hours electricity</label> <br />
										{element.water === 1 ? (
											<input id='checkbox3' type='checkbox' checked='true' />
										) : (
											<input id='checkbox_id' type='checkbox' checked={false} />
										)}
										{'   '}
										<label>Water</label> <br />
										<label>phone Owner :</label> {'   '}{' '}
										<label>{element.phoneowner}</label>
										<br />
										{/* Features */}



                        <boot.Button
                          style={{ marginRight: "10px", marginLeft: "95px" , backgroundColor: '#00848C' }}
                          variant='primary'
                          onClick={() => {
                            item = element;
                            console.log(item + 'iouhg');
                            handleShow();
                          }}
                        >
                          Rent
                        </boot.Button>
                        {/* <boot.Button
                          style={{ backgroundColor: '#00848C' }}
                          variant='primary'
                          onClick={() => {
                            ratingnumber = element.office_id;
                            handleShow2();
                          }}
                        >
                          Rating
                        </boot.Button> */}
    
                        <boot.Modal
                          show={show}
                          onHide={handleClose}
                          backdrop='static'
                          keyboard={false}
                        >
                          <Card>
                            <CardActionArea>
                              <CardMedia
                                image='/static/images/cards/contemplative-reptile.jpg'
                                title='Contemplative Reptile'
                              />
                              <CardContent>
                                <Typography
                                  variant='body2'
                                  color='textSecondary'
                                  component='p'
                                >
                                  <MuiPickersUtilsProvider utils-={DateFnsUtils}>
                                    <Grid container justify='space-around'>
                                      <KeyboardDatePicker
                                        margin='normal'
                                        id='date-picker-dialog'
                                        // label='Starting date'
                                        format='MM/dd/yyyy'
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                          'aria-label': 'change date',
                                        }}
                                      />
                                      <KeyboardDatePicker
                                        margin='normal'
                                        id='date-picker-dialog'
                                        // label='ending date'
                                        format='MM/dd/yyyy'
                                        value={selectedDate2}
                                        onChange={handleDateChange2}
                                        KeyboardButtonProps={{
                                          'aria-label': 'change date',
                                        }}
                                      />
                                    </Grid>
                                  </MuiPickersUtilsProvider>
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                            <CardActions>
                              <Button
                                variant='secondary'
                                onClick={() => {
                                  console.log(
                                    moment(selectedDate).format('YYYY-MM-DD') +
                                    'date1'
                                  );
    
                                  const booking = {
                                    startdate: moment(selectedDate).format(
                                      'YYYY-MM-DD'
                                    ),
                                    enddate: moment(selectedDate2).format(
                                      'YYYY-MM-DD'
                                    ),
                                    emailuser: email,
                                    emailowner: item.email,
                                  };
                                  axios
                                    .post(
                                      'http://localhost:5000/addbooking',
                                      booking
                                    )
                                    .then(res => {
                                      console.log(res.data);
                                    })
                                    .catch(err => {
                                      console.log(err);
                                    });
    
                                  handleClose();
                                }}
                              >
                                OK
                              </Button>
                              <Button
                                variant='secondary'
                                onClick={() => {
                                  handleClose();
                                }}
                              >
                                Cancel
                              </Button>
                            </CardActions>
                          </Card>
                        </boot.Modal>
    
                        {/* <boot.Modal
                          show={show2}
                          onHide={handleClose2}
                          backdrop='static'
                          keyboard={false}
                        >
                          <Card>
                            <CardActionArea>
                              <CardMedia
                                image='/static/images/cards/contemplative-reptile.jpg'
                                title='Contemplative Reptile'
                              />
                              <CardContent>
                                <row className={classes.root}>
                                  <Rating
                                    name='size-medium'
                                    defaultValue={0}
                                    value={star}
                                    onChange={value => {
                                      console.log(`Rated with value ${value}`);
                                      valueofstart = value;
                                    }}
                                  />
                                </row>
                              </CardContent>
                            </CardActionArea>
                            <CardActions>
                              <Button
                                variant='secondary'
                                onClick={() => {
                                  console.log(valueofstart);
                                  const rating = {
                                    id: ratingnumber,
                                    rating: valueofstart,
                                  };
                                  axios
                                    .post('http://localhost:5000/rating', rating)
                                    .then(res => {
                                      console.log(res.data);
                                      window.location.reload(true);
                                    })
                                    .catch(err => {
                                      console.log(err);
                                    });
                                  //window.location.reload(true);
                                  handleClose2();
                                }}
                              >
                                OK
                              </Button>
                            </CardActions>
                          </Card>
                        </boot.Modal> */}
                      </boot.Card.Body>
                    </boot.Card>
    
                    <br />
                  </boot.Container>
                </boot.Row>
              );
            })}
          </boot.Row>
        </div>
      );
}
export default CustemarPage;


