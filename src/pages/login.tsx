import React from "react";

const Login = () => {
    const [credentials, setCredentials] = React.useState({login: '', password: ''});
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.currentTarget;
        setCredentials({...credentials, [target.name]: target.value});
    }
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    
    return (
        <form>
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