import './App.css';
import React, { useEffect, useState } from "react";
// https://stackoverflow.com/questions/46056414/getting-404-for-links-with-create-react-app-deployed-to-github-pages
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Dashboard } from './Dashboard';
import { Rooms } from './Rooms';
import { Guests } from './Guests';
import { NavbarHorizontal } from './NavbarHorizontal';
import { NavbarVertical } from './NavbarVertical';
import { Bookings } from './Bookings';
import { Concierge } from './Concierge';
import { Room } from './Room';
import { Login } from './Login';
import { Register } from './Register';
import { PrivateRoute } from './PrivateRoute';
import styled from "styled-components"
import { Messages } from './Messages';
import { Employee } from './Employee';
import { NewEmployee } from './NewEmployee';
import { NewRoom } from './NewRoom';



export const AuthenticateContext = React.createContext();


function App() {

  const GlobalDiv = styled.div`
        background-color: #F8F8F8 ;
        width: 100%;
        display: flex;
        `;
  
  const ContentDiv = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        `;
  
  const HorizontalDiv = styled.div`
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin-bottom: 50px
        `;


  const [authenticated, setAuthenticated] = useState(false);


  let asd = localStorage.getItem('authenticated')

  useEffect(() => {
    if (localStorage.getItem('authenticated')) {
      setAuthenticated(true);
    }
  }, asd);

  const authenticate = loggedIn => {
    setAuthenticated(loggedIn);
    if (loggedIn) {
      localStorage.setItem('authenticated', '1');
    } else {
      localStorage.removeItem('authenticated');
    }
  };

  const navbarHor = () => {
    if (authenticated) {
      return (
        <HorizontalDiv>
          <NavbarHorizontal />
        </HorizontalDiv>

      )
    }
  }


  return (
    <div className="App">

      <Router>
        <GlobalDiv>
          <NavbarVertical value={authenticated}/>
          <ContentDiv>
            {navbarHor()}
            <Switch>
              <AuthenticateContext.Provider value={authenticated}>


                <PrivateRoute exact path="/">
                    <Dashboard />
                </PrivateRoute>
                <PrivateRoute path="/rooms">
                    <Rooms />
                  </PrivateRoute>
                  <PrivateRoute path="/bookings">
                    <Bookings />
                  </PrivateRoute>
                  <PrivateRoute path="/concierge">
                    <Concierge />
                  </PrivateRoute>
                  <PrivateRoute path="/messages">
                    <Messages />
                  </PrivateRoute>
                  <Route path="/register">
                      <Register />
                  </Route>
                  <PrivateRoute path="/newEmployee">
                    <NewEmployee />
                  </PrivateRoute>
                  <PrivateRoute path="/newRoom">
                    <NewRoom />
                  </PrivateRoute>
                  <PrivateRoute path="/room/:id">
                    <Room />
                  </PrivateRoute>
                  <PrivateRoute path="/employee/:id">
                    <Employee />
                  </PrivateRoute>
                <Route path="/login">
                  <Login authenticate={authenticate} authenticated={authenticated}/>
                </Route>
              </AuthenticateContext.Provider>

            </Switch>
          </ContentDiv>

          </GlobalDiv>
      </Router>
      

    </div>
    );


}

export default App;
