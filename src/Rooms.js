import React, { Component }  from 'react';
import { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

function Rooms() {

    const [rooms, setRooms] = useState([
        { "id": 1, "name": "Room 1" },
        { "id": 2, "name": "Room 2" },
        { "id": 3, "name": "Room 3" },
        { "id": 4, "name": "Room 4" },
        { "id": 5, "name": "Room 5" },
        { "id": 6, "name": "Room 6" }
    ])

    return (
        <div>
            <h1>Rooms</h1>
            <ul>
                {rooms.map((element, index) => 
                    <li>
                        <Link to={"/room/" + element.id} key={index}> {element.name}</Link>
                    </li>
                )}
            </ul>

        </div>
    )
}

export { Rooms }