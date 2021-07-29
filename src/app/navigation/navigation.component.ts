import { Component, OnInit } from '@angular/core';
import { NgbCalendarIslamicCivil } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  model = {
    left: true,
    middle: false,
    right: false
  };

  language : string = 'EN';

  handleLanguageChange (lang: string){
    this.language = lang;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
