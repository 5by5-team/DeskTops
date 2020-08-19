import React from 'react';
import axios from 'axios';
import logo from '../login/img2.jpeg';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Grid, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { AccountCircle, Lock, Email, Phone } from '@material-ui/icons';
import './singupcus.css';


  class SinCustomer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  // save the information in db
  handleSubmit(event) {
    const { name,email, password ,phone} = this.state;

    axios
      .post(`http://localhost:5000/registeruser`, {
        name,email, password,phone
      })
      .then((response) => {
        console.log(response);
        if (response.data.success === 'user registered sucessfully') {
          console.log('NOW LOGIN TO CONFIRM YOUR  ACCOUNT');
          this.props.history.push('/login')
          alert('NOW LOGIN TO CONFIRM YOUR  ACCOUNT');
        }
        else{
          alert('ERROR');
        }
       
      })
      .catch((error) => {
        console.log('registration error', error);
        alert('registration error');
      });
    event.preventDefault();
  }
    render() {
  return (
    <div>
      <Grid container className="test" >
      <Grid item xs={12} sm={6}>
            <img
              src={logo}
              style={{
                width: '95%',
                height: '75%',
                backgroundSize: 'cover',
              }}
              alt='brand'
            />
          </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          alignItems='center'
          direction='coulumn'
          justify='space-between'
          style={{ padding: 10 }}
        >
          <div />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: 400,
              minWidth: 300,
              marginBottom: '200px'
            }} 
          >
             <Grid container >
                <h1>Sing Up Customer</h1>
              </Grid>
            <TextField
              isRequired = {true}
             name='name'
             value={this.state.name}
             onChange={this.handleChange}
              label='Username'
              margin='normal'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              required
             name='email'
             value={this.state.email}
             onChange={this.handleChange}
              label='Email'
              margin='normal'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              required
             name='password'
             type="password"
             value={this.state.password}
             onChange={this.handleChange}
              label='password'
              margin='normal'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              required
            name='phone'
            value={this.state.phone}
            onChange={this.handleChange}
              label='Phone'
              margin='normal'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <Phone />
                  </InputAdornment>
                ),
              }}
            />
            <div style={{ hight: 20 }} />
            <Button color='primary' style={{ backgroundColor: '#00848C' }} variant='contained' onClick= {this.handleSubmit}>
              {' '}
              Done{' '}
            </Button>
            <div style={{ height: 20 }} />
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  );}
}
export default SinCustomer;