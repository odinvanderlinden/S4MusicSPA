import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedin } from '../Service/AuthHelper';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            restricted && isLoggedin() ? 
                <Redirect to="/" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;