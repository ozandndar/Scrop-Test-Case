import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  language$: Observable<string>;

  constructor(private store: Store<{ language: string }>) {
    this.language$ = store.select('language');
  }

  ngOnInit(): void {
  }

}
