import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Translation } from '../utils/helpers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  language$: Observable<string>;
  currentLanguage: string = '';
  private translation: Translation;

  constructor(private store: Store<{ language: string }>, _translation: Translation) {
    this.language$ = store.select('language');

    this.language$.subscribe(event => this.currentLanguage = event.toString());

    this.translation = _translation;
  }

  translate(key: string) {
    return this.translation.make(key);
  }

  ngOnInit(): void {
  }

}