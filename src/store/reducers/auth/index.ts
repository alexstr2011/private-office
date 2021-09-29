import {AuthActions, AuthActionsEnum, IAuthState} from "./types";

const initialState: IAuthState = {
    login: '',
    isAuth: false,
    isLoading: false,
    error: ''
};

const authReducer = (state = initialState, action: AuthActions): IAuthState => {
    switch (action.type) {
        case AuthActionsEnum.SET_LOGIN:
            return {
                ...state, login: action.payload
            }
        case AuthActionsEnum.SET_AUTH:
            return  {
                ...state, isAuth: action.payload, isLoading: false, error: ''
            }
        case AuthActionsEnum.SET_LOADING:
            return {
                ...state, isLoading: true, error: ''
            }
        case AuthActionsEnum.SET_ERROR:
            return  {
                ...state, error: action.payload, isLoading: false, login: '', isAuth: false
            }
        default:
            return state;
    }
}

export default authReducer;