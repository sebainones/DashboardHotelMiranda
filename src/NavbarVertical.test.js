import React, { Component }  from 'react';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { NavbarVertical } from "./NavbarVertical";
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

it("Show navbar on login", () => {
    const history = createMemoryHistory()
    render(
        <Router history={history}>
            <NavbarVertical />
        </Router>)
    expect(screen.getByTestId('login-element')).toBeTruthy()
})