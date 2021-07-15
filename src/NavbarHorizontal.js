import React, { Component }  from 'react';
import { useEffect, useState } from "react";
import styled, { css } from "styled-components"

function NavbarHorizontal() {

    const HorzontalDiv = styled.div`
        background-color:red;
        width: 100%;
        height: 100px;
        `;

    return (
        <div>
            <HorzontalDiv>
                <h1>NavbarHorizontal</h1>
            </HorzontalDiv>
        </div>
    )
}

export { NavbarHorizontal }