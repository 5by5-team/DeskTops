import React, { useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Grid, TextField } from "@material-ui/core"
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { PhotoCamera } from "@material-ui/icons"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
export default function AddOffice() {
    const [location, setlocation] = useState('');
    const usemYStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        input: {
            display: 'none',
        },
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

                        <TextField label="Discription" margin="normal" InputProps={{ startAdornment: <InputAdornment position="start"></InputAdornment> }} />
                        <TextField id="standard-number" label="Number" type="number" InputLabelProps={{ shrink: true, }} /><FormControl className={classes.formControl}>

                            <InputLabel id="demo-simple-select-label">Location</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={location}
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Gaza</MenuItem>
                                <MenuItem value={20}>KhanYounes</MenuItem>
                                <MenuItem value={30}>Rafah</MenuItem>
                                <MenuItem value={30}>Dair AlBalah</MenuItem>
                                <MenuItem value={30}>Beit Lahia</MenuItem>
                                <MenuItem value={30}>Jabalia</MenuItem>

                            </Select>
                        </FormControl>                  <div style={{ hight: 20 }} />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    name="checkedI"
                                />
                            }
                            label="VIP WIFI"
                        /><FormControlLabel
                            control={
                                <Checkbox
                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    name="checkedI"
                                />
                            }
                            label="conditioning"
                        /><FormControlLabel
                            control={
                                <Checkbox
                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    name="checkedI"
                                />
                            }
                            label="24 hours electricity"
                        /><FormControlLabel
                            control={
                                <Checkbox
                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    name="checkedI"
                                />
                            }
                            label="ًWater"
                        /><FormControlLabel
                            control={
                                <Checkbox
                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                                    name="checkedI"
                                />
                            }
                            label="Coffe AND Tea"
                        />
                        

                        <div style={{ height: 20 }} />
                        <div className={classes.root}>
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file"
                                multiple
                                type="file"
                            />
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" color="primary" component="span">
                                    Upload Office Photo
                                </Button>
                            </label>
                            <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                            <label htmlFor="icon-button-file">
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <PhotoCamera />
                                </IconButton>
                            </label>
                            <Button color="primary" variant="contained">
                            Add One
                </Button>
                        </div>
                    </div>
                    <div />
                </Grid>
            </Grid>
        </div>
    )
                        }