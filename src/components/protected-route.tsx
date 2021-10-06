import React, {FC} from "react";
import {Redirect, Route, RouteProps} from "react-router-dom"
import {useTypedSelector} from "../store/hooks/useTypedSelector";

const ProtectedRoute: FC<RouteProps> = ({children, ...rest}) => {
    const isAuth = useTypedSelector(state => state.auth.isAuth);
    return (
        <Route
            {...rest}
            render={
                ({location}) =>
                    isAuth ?
                    children :
                    <Redirect to={{pathname: '/login', state: {from: location}}}/>
            }
        />
    );
}

export default ProtectedRoute;