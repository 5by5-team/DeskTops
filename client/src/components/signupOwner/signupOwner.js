import React, { useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Grid, TextField } from "@material-ui/core"
import { AccountCircle, Lock, Email, Phone, LocationOn,Business } from "@material-ui/icons"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function SignupOwner() {
    const [location, setlocation] = useState('');
    const usemYStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));
    const classes = usemYStyles();

    const handleChange = (event) => {
        setlocation(event.target.value);
    }
    return (
        <div>
            <Grid container style={{ minHeight: '100vh' }}>
                <Grid container item xs={12} sm={6} alignItems="center" direction="coulumn" justify="space-between" style={{ padding: 10 }}>
                    <div />
                    <div style={{ display: "flex", flexDirection: "column", maxWidth: 400, minWidth: 300 }}>
                        <TextField label="CompanyName" margin="normal" InputProps={{ startAdornment: <InputAdornment position="start"> < Business/> </InputAdornment> }} />
                        <TextField label="OwnerName" margin="normal" InputProps={{ startAdornment: <InputAdornment position="start"> < AccountCircle/>         </InputAdornment> }} />
                        <TextField label="Email" margin="normal" InputProps={{ startAdornment: <InputAdornment position="start"> <Email />   </InputAdornment> }} />
                        <TextField label="Password" margin="normal" InputProps={{ startAdornment: <InputAdornment position="start"> <Lock />         </InputAdornment> }} />
                        <TextField label="Phone" margin="normal" InputProps={{ startAdornment: <InputAdornment position="start"> <Phone />         </InputAdornment> }} />
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Location</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={location}
                                onChange={handleChange}
                            ><InputAdornment position="start"> <LocationOn /></InputAdornment>
                                <MenuItem value={10}>Gaza</MenuItem>
                                <MenuItem value={20}>KhanYounes</MenuItem>
                                <MenuItem value={30}>Rafah</MenuItem>
                                <MenuItem value={30}>Dair AlBalah</MenuItem>
                                <MenuItem value={30}>Beit Lahia</MenuItem>
                                <MenuItem value={30}>Jabalia</MenuItem>
                            </Select>
                        </FormControl>
                        <div style={{ hight: 20 }} />
                        <Button color="primary" variant="contained">Done</Button>
                        <div style={{ height: 20 }} />

                    </div>
                    <div />
                </Grid>
            </Grid>
        </div>
    )
}