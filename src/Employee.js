import React, { Component }  from 'react';
import {
    useParams,
    useHistory
} from "react-router-dom";

function Employee() {
    const history = useHistory()
    let { id } = useParams();

    return (
        <div>
            <button onClick={
                () => {
                    history.push("/concierge")
                }
            }>Back</button>

            <h1>{id}</h1>
        </div>
    )
}

export { Employee }