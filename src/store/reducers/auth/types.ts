export interface IAuthState {
    login: string;
    isLoading: boolean;
    isAuth: boolean;
    error: string;
}

export enum AuthActionsEnum {
    SET_LOGIN = 'SET_LOGIN',
    SET_LOADING = 'SET_LOADING',
    SET_AUTH = 'SET_AUTH',
    SET_ERROR = 'SET_ERROR'
}

export interface ISetLoginAction {
    type: AuthActionsEnum.SET_LOGIN;
    payload: string;
}

export interface ISetLoadingAction {
    type: AuthActionsEnum.SET_LOADING;
}

export interface ISetAuthAction {
    type: AuthActionsEnum.SET_AUTH;
    payload: boolean;
}

export interface ISetErrorAction {
    type: AuthActionsEnum.SET_ERROR;
    payload: string;
}

export type AuthActions =
    ISetLoginAction |
    ISetLoadingAction |
    ISetAuthAction |
    ISetErrorAction;
