import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';
import Registration from './Components/Reistration/Registration';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import EventPage from './Components/EventPage/EventPage';
import Delete from './Components/Delete/Delete';
import Admin from './Components/Admin/Admin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
        <Router>
         <Switch>
           <Route path ="/home">
               <Home></Home>
           </Route>
           <Route path="/login">
               <Login></Login>
           </Route>
           <Route path="/admin">
                <Admin></Admin>
           </Route>
           <PrivateRoute path="/events">
              <EventPage></EventPage>
           </PrivateRoute>
           {/* <Route path="/delete/:id">
              <Delete></Delete>
           </Route> */}
           {/* <PrivateRoute path="/booking/:bookingPlaceId">
               <BookingDetail></BookingDetail>
           </PrivateRoute> */}
           <PrivateRoute path="/:id">
               <Registration></Registration>
           </PrivateRoute>
           <Route exact path="/">
               <Home></Home>
           </Route>
           <Route path="*">
               <NotFound></NotFound>
           </Route>
         </Switch>
       </Router>
       </UserContext.Provider>
  );
}

export default App;
