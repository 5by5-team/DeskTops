import React, { useState, useEffect } from 'react';
// import '../landingPage/assets/img/portfolio'
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import '../landingPage/index.css';


import {
    ClickAwayListener,
    Button,
    open,
    Portal,
    classes,
    makeStyles,
} from '@material-ui/core';
import { TimerSharp } from '@material-ui/icons';
var email = '';
const useStyles = makeStyles(theme => ({
    dropdown: {
        position: 'fixed',
        width: 200,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '1px solid',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
    },
    img1: {
        backgroundSize: 'cover'
    }
}));
function Home() {
    const [data, setData] = useState([]);
    const [navbar, setNavbar] = useState([]);
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [location, setLocation] = useState([]);
    const handleClick = () => {
        setOpen(prev => !prev);
    };

    const handleClick3 = e => {
        setLocation(e.target.value);
    };
    const handleClickAway = () => {
        setOpen(false);
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://localhost:5000/getall');
            console.log(result.data.success, 'hhhhhhhhhhhhhhhhhhh');
            setData(result.data.success);
        };

        fetchData();
    }, []);
    useEffect(() => {
        const tokin = localStorage.usertoken;
        if (tokin) {
            var decoded = jwt_decode(tokin);
            console.log(decoded);
            email = decoded.email;
            console.log(email);
        } else {
            console.log('no token found');
        }
    });

    return (
        <div >
            <div >
            <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="/landingPage">Desk Tops</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto my-2 my-lg-0">
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/loginForOwner">LogIn As Owner</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/login">LogIn As Customer</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/contactPage">Let's Talk</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
        {/* <!-- Masthead--> */}
        <header class="masthead">
            <div class="container h-100">
                <div class="row h-100 align-items-center justify-content-center text-center">
                    <div class="col-lg-10 align-self-end">
                        <h1 class="text-uppercase text-white font-weight-bold">Your Favorite Source of Free Bootstrap Themes</h1>
                        <h1 style={{color:"#00848C"}} > _____ </h1><br/>
                    </div>
                    <div class="col-lg-8 align-self-baseline">
                        <p class="text-white-75 font-weight-light mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
                        <a class="btn btn-primary btn-xl js-scroll-trigger" style={{marginRight:'10px',backgroundColor:"#00848C"}} href="/signupOwner">Register As Owner</a>
                        <a class="btn btn-primary btn-xl js-scroll-trigger" style={{backgroundColor:"#00848C"}} href="/signupCustomer">Register As Customer</a>

                    </div>
                </div>
            </div>
        </header>
        {/* <!-- Services--> */}
        <section class="page-section" id="services">
            <div class="container">
                <h2 class="text-center mt-0">At Your Service</h2>
                <h1 style={{color:"#00848C",textAlign:"center"}} > _____ </h1><br/>
                <div class="row">
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                        <img class="xxx" src="https://image.flaticon.com/icons/svg/546/546423.svg" alt="" />
                            <i class="fas fa-4x fa-gem text-primary mb-4"></i>
                            <h3 class="h4 mb-2">Sturdy Themes</h3>
                            <p class="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                        <img class="xxx" src="https://image.flaticon.com/icons/svg/2942/2942867.svg" alt="" />
                            <i class="fas fa-4x fa-laptop-code text-primary mb-4"></i>
                            <h3 class="h4 mb-2">Up to Date</h3>
                            <p class="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                        <img class="xxx" src="https://image.flaticon.com/icons/svg/637/637439.svg" alt="" />
                            <i class="fas fa-4x fa-globe text-primary mb-4"></i>
                            <h3 class="h4 mb-2">Ready to Publish</h3>
                            <p class="text-muted mb-0">You can use this design as is, or you can make changes!</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 text-center">
                        <div class="mt-5">
                        <img class="xxx" src="https://image.flaticon.com/icons/svg/606/606286.svg" alt="" />
                            <i class="fas fa-4x fa-heart text-primary mb-4"></i>
                            <h3 class="h4 mb-2">Made with Love</h3>
                            <p class="text-muted mb-0">Is it really open source if it's not made with love?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Portfolio--> */}
        <div id="portfolio">
            <div class="container-fluid p-0">
                <div class="row no-gutters">
                    <div class="col-lg-4 col-sm-6">
                        <a class="portfolio-box" href="login">
                            <img class="img-fluid" src="https://images.pexels.com/photos/265125/pexels-photo-265125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">WASFSs</div>
                                <div class="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <a class="portfolio-box" href="/login">
                            <img class="img-fluid" src="https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">BDX</div>
                                <div class="project-name">Rent Now </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <a class="portfolio-box" href="/login">
                            <img class="img-fluid" src="https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">ASD</div>
                                <div class="project-name">Rent Now </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <a class="portfolio-box" href="/login">
                            <img class="img-fluid" src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">ATTM</div>
                                <div class="project-name">Rent Now </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <a class="portfolio-box" href="/login">
                            <img class="img-fluid" src="https://images.pexels.com/photos/265101/pexels-photo-265101.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            <div class="portfolio-box-caption">
                                <div class="project-category text-white-50">ATKH</div>
                                <div class="project-name">Rent Now </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-4 col-sm-6">
                        <a class="portfolio-box" href="/login">
                            <img class="img-fluid" src="https://images.pexels.com/photos/312599/pexels-photo-312599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                            <div class="portfolio-box-caption p-3">
                                <div class="project-category text-white-50">Category</div>
                                <div class="project-name">Rent Now </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Contact--> */}
        <section class="page-section" id="contact">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="mt-0">Let's Get In Touch!</h2>
                        <hr class="divider my-4" />
                        <p class="text-muted mb-5">Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                        <i class="fas fa-phone fa-3x mb-3 text-muted"></i>
                        <div>+1 (555) 123-4567</div>
                    </div>
                    <div class="col-lg-4 mr-auto text-center">
                        <i class="fas fa-envelope fa-3x mb-3 text-muted"></i>
                        {/* <!-- Make sure to change the email address in BOTH the anchor text and the link target below!--> */}
                        <a class="d-block" href="mailto:contact@yourwebsite.com">bookingfinder5by5team@gmail.com</a>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Footer--> */}
        <footer class="bg-light py-5">
            <div class="container"><div class="small text-center text-muted">Copyright © 2020 - Desk Tops</div></div>
        </footer>
        </div>
    );
}
export default Home;
