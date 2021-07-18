import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBell } from '@fortawesome/free-regular-svg-icons'
import React, { useEffect, useState, useContext } from "react";
import { ComponentContext } from "./App"
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { NavLink } from "react-router-dom";

const GlobalDiv = styled.div`
    background-color:red;
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Title = styled.div`
    display: flex;
    margin:0;
    justify-content: center;
    align-items: center;
`

const Buttons = styled.div`
    margin:0 50px;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size:26px;
    a{
        color: #135846;
        margin-left: 50px;
    }
`

function NavbarHorizontal() {
    const {} = useParams()
    let path = window.location.pathname.replace('/', '')
    let compoName = path.charAt(0).toUpperCase() + path.slice(1)
    if (compoName === "") {
        compoName = "Dashboard"
    }

    return (
        <>
            <GlobalDiv>

                <Title>
                    <h1>{compoName}</h1>
                </Title>
                <Buttons>
                    <NavLink to="messages">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </NavLink>
                    <a href="https://www.google.com">
                        <FontAwesomeIcon icon={faBell} />
                    </a>

                </Buttons>
            </GlobalDiv>
        </>
    )
}

export { NavbarHorizontal }