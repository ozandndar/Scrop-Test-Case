import { createReducer, on } from "@ngrx/store";
import { login, logout } from "../actions/auth.actions";

export const initialState = {
    isAuthenticated: false,
    user: {
        name: '',
        email: '',
        locale: ''
    }
}

const _authReducer = createReducer(
    initialState,
    on(login, (state, { user }) => state = {
        user,
        isAuthenticated: true
    }),
    on(logout, (state) => state = initialState)
);

export function authReducer(state: any, action: any) {
    return _authReducer(state, action);
}