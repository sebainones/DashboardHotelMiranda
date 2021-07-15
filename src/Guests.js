import React, { Component }  from 'react';
import { useEffect, useState } from "react";
import guests from "../src/jsons/guests.json"
import styled, {css} from "styled-components"

function Guests() {

    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
          ${props => props.primary && css`
            color: blue;
        `}
        ${props => props.secondary && css`
            color: green;
        `}
                ${props => props.asd && css`
            font-size: 50px;
        `}
        `;

    console.log(guests);
    return (
        <div>
            <div>
                <Title>Guests</Title>
                <Title primary>Guests</Title>
                <Title secondary asd>Guests</Title>

            </div>
            <div>
                <p>{ guests[1].name}</p>
                <p>{guests[1].order}</p>
                <p>{guests[1].checkIn}</p>
                <p>{guests[1].checkOut}</p>
                <p>{guests[1].roomType}</p>
                <p>{guests[1].status}</p>

            </div>
        </div>
    )
}

export { Guests }