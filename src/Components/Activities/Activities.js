import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Activities.css';

const Activities = (props) => {
    const activity = props.activity;
    const id = props.activity.id;
    const history = useHistory();

    // var getRegistered = (id) =>{
    //     console.log(id);
    //     history.push(`/registration/${id}`)
    // }
    return (
        <div className="col-md-3 activity">
            <Link to={`/`+id}> <img className="img-fluid activityImg" src={activity.img} alt="..."/></Link>
            {/* <img onClick={()=>getRegistered(id)} className="img-fluid activityImg" src={activity.img} alt="..."/> */}
            <h5 style={{backgroundColor:`${activity.bgColor}`}}>{activity.activity}</h5>
        </div>
    );
};

export default Activities;