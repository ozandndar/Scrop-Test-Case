import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setLanguage } from '../ngrx/actions/language.actions';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  language$: Observable<string>;

  constructor(private store: Store<{ language: string }>) {
    this.language$ = store.select('language');
  }

  ngOnInit(): void {
  }

  handleLanguageChange(language: string) {
    this.store.dispatch(setLanguage({ language }));
  }
}