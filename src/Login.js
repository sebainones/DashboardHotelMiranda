import React, { Component }  from 'react';
import { useEffect, useState, useContext } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    useHistory
} from "react-router-dom";

function Login(props) {
    
    const loginUser = {
        'user': 'Juan',
        'pass': 'asd123'
    }

    let loginSubmit = (e) => {
        e.preventDefault()
        let passInput = document.getElementById('passwordInput')
        let userInput = document.getElementById('usernameInput')

        if (passInput.value === loginUser.pass && userInput.value === loginUser.user) {
            props.authenticate(true)
        } else {
            alert("Error")
        }
    }
    
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={(e) => loginSubmit(e)}>

            <label>Username</label>
            <input id="usernameInput" type="username"></input>
            <label>Password</label>
            <input id="passwordInput" type="password"></input>
            <button >Log in</button>
            </form>

        </div>
    )
}

export { Login }