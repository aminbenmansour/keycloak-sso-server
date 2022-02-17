import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { KeycloakService, KeycloakAngularModule } from 'keycloak-angular';
import { initializer } from '../utils/initializer';
import { HttpClientModule } from '@angular/common/http';

let keycloakService: KeycloakService = new KeycloakService();
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      deps: [ KeycloakService ],
      multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
