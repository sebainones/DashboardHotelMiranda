import React, { Component }  from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faKey, faUser, faTh, faCalendarCheck, faConciergeBell, faHotel } from '@fortawesome/free-solid-svg-icons'

const VerticalDiv = styled.div`
    background-color:blue;
    width: 15vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    `;

const VerticalUl = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    li{
        width: 50%;
        background-color: white;
        margin-bottom: 15px;
        height: 65px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    `;

const VerticalLi = styled(NavLink)`
    color: red;
    text-decoration: none;
    margin-left: 30px;
`;

const Logo = styled.div`
    text-align: left;
    margin: 30px 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        font-size:40px;
        font-weight: 600;
    }
    p{
        font-size: 12px;
        color: #5D5449;
    }
    .asd{
        color: red;
        font-size: 40px;
        margin-right: 15px;
    }
    `;
function NavbarVertical(props) {

    const value = props.value;


    if (value) {
        return (
            <div>

                <VerticalDiv>
                    <Logo>
                        <div>
                            {/* <FontAwesomeIcon icon={faHotel} className="asd" /> */}
                        </div>
                        <div>
                            <h1>travl</h1>
                            <p>Hotel Admin Dashboard</p>
                        </div>
                    </Logo>
                    <VerticalUl>
                        <li>
                            {/* <FontAwesomeIcon icon={faTh} /> */}
                            <VerticalLi to="/" id="dashboard"> Dashboard</VerticalLi>
                        </li>
                        <li>
                            {/* <FontAwesomeIcon icon={faKey} /> */}
                            <VerticalLi to="rooms" id="rooms"> Rooms</VerticalLi>
                        </li>
                        <li>
                            {/* <FontAwesomeIcon icon={faCalendarCheck} /> */}
                            <VerticalLi to="bookings" id="bookings"> Bookings</VerticalLi>
                        </li>
                        <li>
                            {/* <FontAwesomeIcon icon={faConciergeBell} /> */}
                            <VerticalLi to="concierge" id="concierge"> Concierge</VerticalLi>
                        </li>
                    </VerticalUl>
                </VerticalDiv>

            </div>
        )
    } else {
        return (
            <div>
                <VerticalDiv>
                    <Logo>
                        <div>
                            {/* <FontAwesomeIcon icon={faHotel} className="asd" /> */}
                        </div>
                        <div>
                            <h1>travl</h1>
                            <p>Hotel Admin Dashboard</p>
                        </div>
                    </Logo>
                    <VerticalUl>
                        <li>
                            {/* <FontAwesomeIcon icon={faTh} /> */}
                            <VerticalLi to="/login" data-testid="login-element">Login</VerticalLi>
                        </li>
                        <li>
                            {/* <FontAwesomeIcon icon={faTh} /> */}
                            <VerticalLi to="/register" data-testid="register-element" id="register-button-nav">Register</VerticalLi>
                        </li>
                    </VerticalUl>
                </VerticalDiv>
            </div>
        )
    }
}

export { NavbarVertical }