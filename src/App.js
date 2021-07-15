import './App.css';
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useHistory
} from "react-router-dom";
import { Dashboard } from './Dashboard';
import { Rooms } from './Rooms';
import { Guests } from './Guests';
import { NavbarHorizontal } from './NavbarHorizontal';
import { NavbarVertical } from './NavbarVertical';
import { Bookings } from './Bookings';
import { Concierge } from './Concierge';
import { Reviews } from './Reviews';
import { Room } from './Room';
import { Login } from './Login';
import { PrivateRoute } from './PrivateRoute';
import styled, { css } from "styled-components"


export const AuthenticateContext = React.createContext();

function App() {

  const GlobalDiv = styled.div`
        background-color:green;
        width: 100%;
        height: 500px;
        display: flex;
        justify-content: space-between;
        align-content: center;
        `;


  const [authenticated, setAuthenticated] = useState(false);

  let asd = localStorage.getItem('authenticated')

  useEffect(() => {
    // Check to see if previously logged in
    if (localStorage.getItem('authenticated')) {
      setAuthenticated(true);
    }
    
  }, asd);

  const authenticate = loggedIn => {
    // Handles both login and logout
    setAuthenticated(loggedIn);
    if (loggedIn) {
      // login is stored
      localStorage.setItem('authenticated', '1');
    } else {
      // logout is stored
      localStorage.removeItem('authenticated');
    }
  };

  if (!authenticated) {
    return (
        <AuthenticateContext.Provider value={authenticated}>
          <Login authenticate={authenticate} />

        </AuthenticateContext.Provider>
      )
  }
    

  return (
    <div className="App">

        <Router>
          <NavbarHorizontal />
        <GlobalDiv>
            <NavbarVertical />
            <Switch>
              <PrivateRoute exact path="/">
                  <Dashboard />
              </PrivateRoute>
                <Route path="/rooms">
                  <Rooms />
                </Route>
                <Route path="/guests">
                  <Guests />
                </Route>
                <Route path="/bookings">
                  <Bookings />
                </Route>
                <Route path="/concierge">
                  <Concierge />
                </Route>
                <Route path="/reviews">
                  <Reviews />
                </Route>
                <Route path="/room/:id">
                  <Room />
              </Route>
              <Route path="/login">
                <Login />
              </Route>

            </Switch>
          </GlobalDiv>
        </Router>

    </div>
    );


}

export default App;
