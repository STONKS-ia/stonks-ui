// @ts-nocheck
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "../../src/hooks/auth";


const SpecificRoute = ({component: Component, ...rest}) => {
    const { cityId } = useAuth(); 
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            cityId === props.match.params.id  ?
                <Component {...props} />
            : <Redirect to="/denied" />
        )} />
    );
};

export default SpecificRoute;