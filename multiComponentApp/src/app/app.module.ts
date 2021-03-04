import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { meanComponent } from './components/mean.component';
import { mernComponent } from './components/mern.component';
import { mevnComponent } from './components/mevn.component';
import { fullstackComponent } from './components/fullstack.component';

@NgModule({
  declarations: [
    AppComponent,
    meanComponent,
    mernComponent,
    mevnComponent,
    fullstackComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [fullstackComponent]
})
export class AppModule { }
