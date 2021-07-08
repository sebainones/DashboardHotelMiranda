import { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import styled, { css } from "styled-components"

function Dashboard() {
    let history = useHistory()
    const DashboardDiv = styled.div`
        background-color:yelow;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        `;
    return (
        <>
            <DashboardDiv>

            <h1>Dashboard</h1>
            <button onClick={
                () => {
                    localStorage.removeItem('authenticated')
                    window.location.reload()
                    history.push("/")
                }
            }>Log out</button>
            </DashboardDiv>


        </>
    )
}

export { Dashboard }