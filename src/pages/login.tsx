import React from "react";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../store/hooks/useTypedSelector";
import {Redirect} from "react-router-dom";
import {allActionCreators} from "../store/reducers/action-creators";

const Login = () => {
    const [credentials, setCredentials] = React.useState({login: '', password: ''});
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.currentTarget;
        setCredentials({...credentials, [target.name]: target.value});
    }
    const useAuth = useTypedSelector(state => state.auth.isAuth);
    const dispatch = useDispatch();
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(allActionCreators.AuthActionCreators.Login(credentials));
    }

    return (
        useAuth
            ?
            <Redirect to='/'/>
            :
            <form onSubmit={submitHandler}>
                <label>Login:
                    <input
                        type='text'
                        name='login'
                        onChange={changeHandler}
                        value={credentials.login}
                        required/>
                </label>
                <label>Password:
                    <input
                        type='password'
                        name='password'
                        onChange={changeHandler}
                        value={credentials.password}
                        required/>
                </label>
                <button type='submit'>Log in</button>
            </form>
    );
}

export default Login;