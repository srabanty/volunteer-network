import React, { useContext, useEffect, useState } from 'react';
import './Admin.css';
import logo from '../../siteImages/logos/Group 1329.png';
import people from '../../siteImages/logos/users-alt 1.png';
import deleteIcon from '../../siteImages/logos/image.png';

const Admin = () => {
    const [user, setUser]= useState([]);

    useEffect(()=>{
        fetch('https://evening-fjord-13433.herokuapp.com/volunteer')
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            setUser(data)
        }
        );
    },[])
    function deleteEvent(id){
        console.log(id);
        fetch(`https://evening-fjord-13433.herokuapp.com/delete/${id}`,{
            method  : 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('done');
            const updateItems = user.filter(item=>item._id !== id);
            setUser(updateItems);
        })
    }
    return (
        <div className="row">
            <div className="container admin-page">
                <div className="col-md-3 admin">
                    <img src={logo} alt=""/><br/>
                    <div><img className="icon" src={people} alt=""/><a href="...">Volunteer Register List</a></div>
                    <p><strong>+ Add event</strong></p>
                </div>
                <div className="col-md-9 register-list">
                    <h4>Volunteer Register List</h4>
                    <div className="row">
                        <div className="col-md-2">
                            <h6>Name</h6>
                        </div>
                        <div className="col-md-3">
                            <h6>Email ID</h6>
                        </div>
                        <div className="col-md-3">
                            <h6>Registration Date</h6>
                        </div>
                        <div className="col-md-2">
                            <h6>Volunteer List</h6>
                        </div>
                        <div className="col-md-2">
                            <h6>Action</h6>
                        </div>
                    </div>
                    {
                    user.map(singleUser=>
                        <div className="register-list-items">
                            <div className="row">
                                <div className="col-md-2">
                                    
                                    <p><strong>{singleUser.name}</strong></p>
                                </div>
                                <div className="col-md-3">
                                    
                                    <p><strong>{singleUser.email}</strong></p>
                                </div>
                                <div className="col-md-3">
                                    
                                    <p><strong>{singleUser.date}</strong></p>
                                </div>
                                <div className="col-md-2">
                                    
                                    <p><strong>{singleUser.activity}</strong></p>
                                </div>
                                <div className="col-md-2">
                                    <div>
                                        <button onClick={()=>deleteEvent(singleUser._id)}>
                                            <img src={deleteIcon} alt="..."/>
                                        </button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>)
                    }
                </div>
               
            </div>
        </div>
    );
};

export default Admin;