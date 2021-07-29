import dictionary from "./dictionary";

import { Store } from '@ngrx/store';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class Translation {

    language: string;
    key: string;

    constructor(store: Store<{ language: string }>) {
        store.select('language').subscribe(event => this.language = event.toString());
    }

    public make(key: string) {
        const translation = dictionary.filter(i => i.key === key);
        if (translation.length > 0) {
            if (this.language === 'TR' || this.language === 'EN') {
                return translation[0].values[this.language];
            } else {
                return 'Enexpected language.';
            }
        } else {
            return 'No translation found.'
        }
    }
}