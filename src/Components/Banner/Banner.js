import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <h2>I GROW BY HELPING PEOPLE IN NEED</h2>
            <div className="search-box">
                <input className="search-input" type="text" placeholder="Search..."/>
                <button className="btn btn-primary">Search</button>
            </div>
        </div>
    );
};

export default Banner;