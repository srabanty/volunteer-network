import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import Registration from '../Reistration/Registration';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import './Login.css';
import logo from '../../siteImages/logos/Group 1329.png';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    // const history = useHistory();

    // const getRegistered = () =>{
    //     history.push('/registration')
    // }
    const [user, setUser] = useState({
        isSignIn:false,
        name:'',
        email:''
    });

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let {from} = location.state || {from:{pathname:"/"}};
    
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = ()=>{
        firebase.auth().signInWithPopup(provider)
        .then(res=>{
            const user = res.user;
            const signedInUser={
                isSignedIn:true,
                name: res.user.displayName,
                email: res.user.email
            }
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div className="login-background">
            <div className="login">
                <img src={logo} alt=""/>
            </div>
            <div className="googleLogIn">
                <h4>Login With</h4>
                <button onClick={handleSignIn}><img src={"https://imgur.com/q4dusK5.png"} alt=""/> Continue with Google</button>
                <p>Don't have any account? <a href="...">Create an account</a></p>
            </div>
            
            {/* {
                user.isSignedIn && <Registration name ={user.name}
                                                 email={user.email}
                                                 ></Registration>
            } */}
        </div>
    );
};

export default Login;

