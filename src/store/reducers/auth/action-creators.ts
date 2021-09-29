import {AuthActionsEnum, ISetAuthAction, ISetErrorAction, ISetLoadingAction, ISetLoginAction} from "./types";
import {AppDispatch} from "../../index";
import {LOGIN_URL} from "../../../api";

export const AuthActionCreators = {
    setLogin: (login: string): ISetLoginAction => ({
        type: AuthActionsEnum.SET_LOGIN,
        payload: login
    }),
    setLoading: (): ISetLoadingAction => ({
        type: AuthActionsEnum.SET_LOADING
    }),
    setAuth: (auth: boolean): ISetAuthAction => ({
        type: AuthActionsEnum.SET_AUTH,
        payload: auth
    }),
    setError: (error: string): ISetErrorAction => ({
        type: AuthActionsEnum.SET_ERROR,
        payload: error
    }),
    login: (credentials: {login: string, password: string} ) => (dispatch: AppDispatch) => {
        dispatch(AuthActionCreators.setLoading());

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
                throw new Error('Failed getting data from server');
            }
        })
            .then((response) => {
                dispatch(AuthActionCreators.setAuth(true));
                dispatch(AuthActionCreators.setLogin(response.login));
            })
            .catch((error) => {
                dispatch(AuthActionCreators.setError(error.message));
            });
    }
}