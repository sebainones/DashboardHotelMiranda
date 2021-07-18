import {
    useParams,
    useHistory
} from "react-router-dom";

function Employee() {
    const history = useHistory()
    let { id } = useParams();

    return (
        <>
            <button onClick={
                () => {
                    history.push("/concierge")
                }
            }>Back</button>

            <h1>{id}</h1>
        </>
    )
}

export { Employee }