import { createAction, props } from '@ngrx/store'

export const setLanguage = createAction('[Language Component] Set Language',
    props<{ language : string }>()
);