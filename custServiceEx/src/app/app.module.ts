import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { compOne } from './components/comp.one';
import { compTwo } from './components/comp.two';
import { compThree } from './components/comp.three';

@NgModule({
  declarations: [
    AppComponent,
    compOne,
    compTwo,
    compThree
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [compOne]
})
export class AppModule { }
