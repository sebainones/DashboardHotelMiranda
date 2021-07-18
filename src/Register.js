import {
    useHistory
} from "react-router-dom";

function Register() {
    let history = useHistory()

    let registerSubmit = (e) => {
        e.preventDefault()
        let passInput = document.getElementById('registerPassword').value
        let repeatPassInput = document.getElementById('registerPasswordRepeat').value

        if (passInput === repeatPassInput) {
            history.push('/login')
        } else {
            alert("incorrect")
        }

    }

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={(e) => registerSubmit(e)}>

                <label>Full name</label>
                <input id="registerName" type="username"></input>
                <label>Email</label>
                <input id="registerEmail" type="email"></input>
                <label>Password</label>
                <input id="registerPassword" type="password"></input>
                <label>Repeat Password</label>
                <input id="registerPasswordRepeat" type="password"></input>

                <button id="register-button" >Register</button>
            </form>


        </>
    )
}

export { Register }