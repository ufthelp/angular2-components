import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule} from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MessagesComponent} from './messages-components'

import { AppComponent }  from './app.component';


@NgModule({
  imports:      [ BrowserModule, MaterialModule,BrowserAnimationsModule ],
  declarations: [ AppComponent,MessagesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
