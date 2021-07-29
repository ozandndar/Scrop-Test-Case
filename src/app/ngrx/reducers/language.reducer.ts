import { createReducer, on } from '@ngrx/store';
import { setLanguage } from '../actions/language.actions';

export const initialState = 'EN';

const _languageReducer = createReducer(
    initialState,
    on(setLanguage, (state, { language }) => state = language)
);

export function languageReducer(state: any, action: any) {
    return _languageReducer(state, action);
}