import { createAction, props } from "@ngrx/store";

export const login = createAction('[Login Component] Login', props<{
    user: {
        name: string,
        email: string,
        locale: string
    }
}>());

export const logout = createAction('[Logout Component] Logout');
