import React from 'react';
import { render, screen } from '@testing-library/react';
import { StatusButton } from "./StatusButton";

it("Button room available", () => {
    render(<StatusButton compo="roomsAvailable"></StatusButton>);
    expect(screen.getByTestId('button-element')).toHaveStyle('background: #5AD07A 0% 0% no-repeat padding-box')
})

it("Button room booked", () => {
    render(<StatusButton compo="roomsBooked"></StatusButton>);
    expect(screen.getByTestId('button-element')).toHaveStyle('background: #E23428 0% 0% no-repeat padding-box')
})



// it("Show button color", () => {
//     render(<Rooms></Rooms>)
//     expect(screen.getByTestId('button-element')).toBeTruthy()
// })