import {AuthActions, AuthActionsEnum, IAuthState} from "./types";

const initialState: IAuthState = {
    name: '',
    isAuth: false,
    isLoading: false,
    error: ''
};

const authReducer = (state = initialState, action: AuthActions): IAuthState => {
    switch (action.type) {
        case AuthActionsEnum.START:
            return {
                ...state, name: '', isAuth: false, isLoading: true, error: ''
            }
        case AuthActionsEnum.SUCCESS:
            return  {
                ...state, name: action.payload, isAuth: true, isLoading: false
            }
        case AuthActionsEnum.ERROR:
            return {
                ...state, isLoading: false, error: action.payload
            }
        case AuthActionsEnum.LOGOUT:
            return  {
                ...state, name: '', isAuth: false
            }
        default:
            return state;
    }
}

export default authReducer;