import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {IAuthState} from "../store/reducers/auth/types";
import {RootState} from "../store";

const Login = () => {
    const [credentials, setCredentials] = React.useState({login: '', password: ''});
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.currentTarget;
        setCredentials({...credentials, [target.name]: target.value});
    }
    const dispatch = useDispatch();
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(AuthActionCreators.login(credentials));
    }


    const store = useSelector<RootState>(state => state.auth);
    console.log(store);

    return (
        <form onSubmit={submitHandler}>
            {/*<button onClick={() => dispatch(AuthActionCreators.setLogin('12345'))}>setLogin</button>
            <button onClick={() => dispatch(AuthActionCreators.setAuth(true))}>setAuth</button>
            <button onClick={() => dispatch(AuthActionCreators.setError('Error1'))}>setError</button>
            <button onClick={() => dispatch(AuthActionCreators.setLoading())}>setLoading</button>*/}

            <label>Login:
                <input
                    type='text'
                    name='login'
                    onChange={changeHandler}
                    value={credentials.login}
                    required />
            </label>
            <label>Password:
                <input
                    type='password'
                    name='password'
                    onChange={changeHandler}
                    value={credentials.password}
                    required />
            </label>
            <button type='submit'>Log in</button>
        </form>
    );
}

export default Login;