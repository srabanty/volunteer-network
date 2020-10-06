import React, { useContext } from 'react';
import './NewHeader.css';
import logo from '../../siteImages/logos/Group 1329.png';
import { UserContext } from '../../App';

const NewHeader = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
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
                        <a class="nav-link mr-3" href="#blog">{loggedInUser.name}</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NewHeader;