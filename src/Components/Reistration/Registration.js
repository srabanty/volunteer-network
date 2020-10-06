import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './Registration.css';
import logo from '../../siteImages/logos/Group 1329.png';
import volunteerWorks from '../../fakeData/fakeData';
import ListedWorks from '../ListedWorks/ListedWorks';

const Registration = () => {
    const user = useParams();
    console.log(user); //id of url
    const singleActivity = volunteerWorks.find(activity=>activity.id===parseInt(user.id));
    console.log(singleActivity);
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    const[input, setInput]=useState({
        name:loggedInUser.name,
        email: loggedInUser.email,
        date: "",
        description: "",
        activity: singleActivity.activity,
    });
    const handleChangeInput = (e) => { //date and description
        setInput({...input,[e.target.name]:e.target.value})
        };
    
        const history = useHistory();
        const handleSubmittedInfo =()=>{
            console.log(input);
             history.push('/events');
            fetch('http://localhost:5000/addEvents',{
               method: 'POST', 
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify(input)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        }

    return (
        <div>
            <div className="registration-background">
                <div className="registration">
                    <img src={logo} alt=""/>
                </div>
                <div className="registration-form form-control">
                    <h4>Register as a volunteer</h4>
                    <input type="text" name="name" id="name" value={loggedInUser.name}/><br/>
                    <input type="text" name="email" id="email" value={loggedInUser.email}/><br/>
                    <input onChange={(e)=>handleChangeInput(e)} type="date" name="date" placeholder="yyyy-MM-dd" id="date" defaultValue={input.date}/>
                    <input onChange={(e)=>handleChangeInput(e)} type="text" name="description" id="description" defaultValue={input.description} placeholder="Description"/>
                    <input type="text" name="activity" id="activity" value={singleActivity.activity}/>
                    <button onClick={handleSubmittedInfo} className="btn btn-primary">Registration</button>
                </div>
            </div>
        </div>
    );
};

export default Registration;