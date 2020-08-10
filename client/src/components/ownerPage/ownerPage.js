import React from 'react';
import  {Link}  from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Bar from "../bar/Bar"
export default function ownerpage() {
    return(
        <div>
            <Bar/>
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
    </div>
    )}