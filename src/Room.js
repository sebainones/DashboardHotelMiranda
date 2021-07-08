import { useEffect, useState } from "react";
import {
    useParams
} from "react-router-dom";

function Room() {

    let { id } = useParams();

    return (
        <>
            <h1>{ id }</h1>
        </>
    )
}

export { Room }