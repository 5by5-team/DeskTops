import React from 'react';
import logo from '../login/img2.jpg';
import { AccountCircle, Lock } from '@material-ui/icons';
import { Grid, TextField, Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function loginforOwner() {
  return (
    <div>
      <Grid container style={{ minHeight: '100vh' }}>
        <Grid item xs={12} sm={6}>
          <img
            src={logo}
            style={{
              width: '80%',
              height: '80%',
              objectFit: 'cover',
              margin: '30px',
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
          direction='column'
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
            }}
          >
            <Grid container>
              <h1>LOGIN AS OWNER</h1>
            </Grid>
            <TextField
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
            <div style={{ height: 20 }} />
            <Link href='/ownerPage' onClick={console.log('kk')}>
              <Button variant='contained' color='primary'>
                LOGIN
              </Button>
            </Link>
            <div style={{ height: 60 }} />

            <Link href='/signupCustomer' onClick={console.log('kk')}>
              <Button variant='contained' color='primary'>
                REGISTER
              </Button>
            </Link>

            <Button>register with google</Button>
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  );
}
