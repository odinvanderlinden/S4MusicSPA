import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedin } from "../Service/AuthHelper";

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) =>
				isLoggedin() ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	);
};

export default PrivateRoute;
