export interface IAuthState {
    name: string;
    isLoading: boolean;
    isAuth: boolean;
    error: string;
}

export enum AuthActionsEnum {
    START = 'START',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
    LOGOUT = 'LOGOUT'
}

export interface IAuthStartAction {
    type: AuthActionsEnum.START;
}

export interface IAuthSuccessAction {
    type: AuthActionsEnum.SUCCESS;
    payload: string;
}

export interface IAuthErrorAction {
    type: AuthActionsEnum.ERROR;
    payload: string;
}

export interface IAuthLogout {
    type: AuthActionsEnum.LOGOUT;
}

export type AuthActions =
    IAuthStartAction |
    IAuthSuccessAction |
    IAuthErrorAction |
    IAuthLogout;
