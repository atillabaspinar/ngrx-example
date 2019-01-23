import { AuthActions, SIGNIN, SIGNUP, LOGOUT, SET_TOKEN } from "./auth.actions";
import { st } from "@angular/core/src/render3";

export interface State {
    token: string;
    authenticated: boolean;
}

const initialState: State = {
    token: null,
    authenticated: false
};

export function authReducer(state = initialState, action: AuthActions) {
    switch(action.type){
        case SIGNIN:
        case SIGNUP:
            return {
                ...state,
                authenticated: true
            };
        case LOGOUT:
            return {
                ...state,
                authenticated: false,
                token: null
            };
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload
            };
        default:
            return state;
    }
}
