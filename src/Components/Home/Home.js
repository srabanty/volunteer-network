import React, { useEffect, useState } from 'react';
import volunteerWorks from '../../fakeData/fakeData';
import Activities from '../Activities/Activities';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';

const Home = () => {
    const[work,setWork]= useState([]);

    useEffect(()=>{
        fetch('https://evening-fjord-13433.herokuapp.com/works')
        .then(res=>res.json())
        .then(data=> setWork(data))
    },[])
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div className="container">
                <div className="row">
                
                    {
                        work.map(activity=><Activities activity={activity} key={activity.id}></Activities>)
                    }
                    
                </div>
            </div>   
        </div>
    );
};

export default Home;