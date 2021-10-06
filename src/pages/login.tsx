import React from "react";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../store/hooks/useTypedSelector";
import {Redirect} from "react-router-dom";
import {allActionCreators} from "../store/reducers/action-creators";
import StyledButton from "../components/styled-button";
import styles from "./login.module.css";

const Login = () => {
    const [credentials, setCredentials] = React.useState({login: '', password: ''});
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.currentTarget;
        setCredentials({...credentials, [target.name]: target.value});
    }
    const {isAuth, isLoading, error} = useTypedSelector(state => state.auth);
    const dispatch = useDispatch();
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(allActionCreators.AuthActionCreators.Login(credentials));
    }

    return (
        isAuth
            ?
            <Redirect to='/'/>
            :
            <form onSubmit={submitHandler} className={styles.form}>
                <h1>Account login</h1>
                <label>
                    <span>Login:</span>
                    <input
                        type='text'
                        name='login'
                        onChange={changeHandler}
                        value={credentials.login}
                        required/>
                </label>
                <label>
                    <span>Password:</span>
                    <input
                        type='password'
                        name='password'
                        onChange={changeHandler}
                        value={credentials.password}
                        required/>
                </label>
                <div className={styles.status}>
                    <StyledButton>Log in</StyledButton>
                    {
                        isLoading && (<p>Loading...</p>)
                    }
                    {
                        error && (<p className={styles.error}>{error}</p>)
                    }
                </div>
            </form>
    );
}

export default Login;