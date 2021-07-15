
import React, { Component }  from 'react';
import { useEffect, useState } from "react";
import {
    useParams
} from "react-router-dom";

function Room() {

    let { id } = useParams();

    return (
        <div>
            <h1>{ id }</h1>
        </div>
    )
}

export { Room }