import React, { useContext } from "react";
import {
    Route,
    Redirect
} from "react-router-dom";
import { AuthenticateContext } from "./App"


const PrivateRoute = ({ children, ...rest }) => {
    const value = useContext(AuthenticateContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                value ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export { PrivateRoute }