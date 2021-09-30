import {AuthActionsEnum, IAuthErrorAction, IAuthLogout, IAuthStartAction, IAuthSuccessAction,} from "./types";
import {AppDispatch} from "../../index";
import {LOGIN_URL} from "../../../api";

export const AuthActionCreators = {
    Start: (): IAuthStartAction => ({
        type: AuthActionsEnum.START
    }),
    Success: (name: string): IAuthSuccessAction => ({
        type: AuthActionsEnum.SUCCESS,
        payload: name
    }),
    Error: (error: string): IAuthErrorAction => ({
        type: AuthActionsEnum.ERROR,
        payload: error
    }),
    Logout: (): IAuthLogout => ({
        type: AuthActionsEnum.LOGOUT
    }),
    Login: (credentials: {login: string, password: string} ) => (dispatch: AppDispatch) => {
        dispatch(AuthActionCreators.Start());

        fetch(LOGIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Login failed');
            }
        })
            .then((response) => {
                dispatch(AuthActionCreators.Success(response.login));
            })
            .catch((error) => {
                dispatch(AuthActionCreators.Error(error.message));
            });
    }
}
