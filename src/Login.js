import { useEffect } from "react";
import {
    useHistory
} from "react-router-dom";

function Login(props) {
    let history = useHistory()
    const loginUsers = [
        {
            'email': 'admin@admin.com',
            'pass': 'admin'
        },
        {
            'email': 'pedro@gmail.com',
            'pass': 'deltoro'
        },
    ]

    useEffect(() => {
        if (props.authenticated) {
            history.push("/")
        }
    }, [props.authenticated])

    let loginSubmit = (e) => {
        e.preventDefault()
        let passInput = document.getElementById('passwordInput')
        let userInput = document.getElementById('emailInput')

        // loginUsers.map(element => {
            for (let i = 0; i < loginUsers.length; i++){

                if (passInput.value === loginUsers[i].pass && userInput.value === loginUsers[i].email) {
                    props.authenticate(true)
                    break;
                } else {
                    alert("Error")
                }
            }
        // })
    }
    
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={(e) => loginSubmit(e)}>

            <label>Email</label>
            <input id="emailInput" type="email"></input>
            <label>Password</label>
            <input id="passwordInput" type="password"></input>
            <button id="login-button" >Log in</button>
            </form>

        </>
    )
}

export { Login }