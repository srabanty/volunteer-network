import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../siteImages/logos/Group 1329.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="#home"><img src={logo} alt="...."/></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link mr-3" href="#home">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-3" href="#donation">Donation</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-3" href="#events">Events</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-3" href="#blog">Blog</a>
                        </li>
                        <li class="nav-item">
                            <Link to={'/register'}><button class="btn btn-primary mr-3">Register</button></Link>
                        </li>
                        <li class="nav-item">
                            <Link to={'/admin'}><button class="btn btn-secondary">Admin</button></Link>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;