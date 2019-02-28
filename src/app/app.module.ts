import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { APIService} from './yelp.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ APIService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
