import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './EventPage.css';
import image from '../../siteImages/images/extraVolunteer.png';
import Header from '../Header/Header';
import NewHeader from '../NewHeader/NewHeader';

const EventPage = () => {
    const [events, setEvents]= useState([]);
    const [loggedInUser,setLoggedInUser]= useContext(UserContext);

    useEffect(()=>{
        fetch('http://localhost:5000/events?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=> setEvents(data));
    },[])

    function deleteEvent(id){
        console.log(id);
        fetch(`http://localhost:5000/delete/${id}`,{
            method  : 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('done');
            const updateItems = events.filter(item=>item._id !== id);
            setEvents(updateItems);
        })
    }
    return (
        <div className="row">
            <div className="container">
                <NewHeader></NewHeader>
                    {
                        events.map(event=><div className="col-md-6 single-event">
                            <div>
                                <img src={image} alt=""/>
                            </div>
                            <div>
                                <p><strong>{event.activity}</strong></p>
                                <p> Details : {event.description}</p> 
                                <h6>date : {new Date(event.date).toDateString('dd/MM/YYYY')}</h6>
                                <button onClick={()=>deleteEvent(event._id)} className="btn btn-danger">Delete</button>
                            </div>
                        </div>)
                    }
            </div>
        </div>
    );
};

export default EventPage;