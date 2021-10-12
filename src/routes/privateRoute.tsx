//@ts-nocheck
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "../../src/hooks/auth";


const PrivateRoute = ({component: Component, ...rest}) => {
    const { roles } = useAuth(); 
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            roles === 'ROLE_ADMIN'  ?
                <Component {...props} />
            : <Redirect to="/denied" />
        )} />
    );
};

export default PrivateRoute;