import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// reducers
import { languageReducer } from './ngrx/reducers/language.reducer';
import { authReducer } from './ngrx/reducers/auth.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    NavigationComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    StoreModule.forRoot({
      language: languageReducer,
      auth: authReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }