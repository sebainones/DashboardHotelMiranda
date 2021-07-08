import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components"


function NavbarVertical() {

    const VerticalDiv = styled.div`
        background-color:blue;
        width: 15%;
        height: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        `;

    
    return (
        <>

                <VerticalDiv>
                <h1>NavbarVertical</h1>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/"> Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to="/rooms"> Rooms</NavLink>
                            </li>
                            <li>
                                <NavLink to="/bookings"> Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/guests"> Guests</NavLink>
                            </li>
                            <li>
                                <NavLink to="/concierge"> Concierge</NavLink>
                            </li>
                            <li>
                                <NavLink to="/reviews"> Reviews</NavLink>
                            </li>
                        </ul>
                    </nav>
                </VerticalDiv>

        </>
    )
}

export { NavbarVertical }