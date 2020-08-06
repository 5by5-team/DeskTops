import React from 'react';
// import photo from './photo_2017-11-23_07-26-42.jpg';
// import logo from './201695562016-12-204225943Cooking Table-01.jpg';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Grid, TextField, Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { AccountCircle, Lock, Email, Phone } from '@material-ui/icons';

export default function SinCustomer() {
  return (
    <div>
      <Grid container style={{ minHeight: '100vh' }}>
        {/* <Grid item xs={12} sm={6}>
          <img
            src={photo}
            style={{ width: '85%', height: '85%', objectFit: 'cover' }}
            alt='brand'
          />
        </Grid> */}
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
            }}
          >
            {/* <Grid container justify='center'>
              <img src={logo} width={200} alt='logo' />
            </Grid> */}
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
              label='phone'
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
            <Link href='/login' onClick={console.log('kk')}>
              <Button variant='contained' color='primary'>
                DONE
              </Button>
            </Link>

            <div style={{ height: 20 }} />
          </div>
          <div />
        </Grid>
      </Grid>
    </div>
  );
}
