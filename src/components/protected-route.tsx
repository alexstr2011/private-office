import React, {FC} from "react";
import {Redirect, Route, RouteProps} from "react-router-dom"
import {useTypedSelector} from "../store/hooks/useTypedSelector";

const ProtectedRoute: FC<RouteProps> = ({children, ...rest}) => {
    const isAuth = useTypedSelector(state => state.auth.isAuth);
    return (
        <Route
            {...rest}
            render = {() => isAuth ? children : <Redirect to={{pathname: 'login'}}/>
        }
        />
    );

}

export default ProtectedRoute;