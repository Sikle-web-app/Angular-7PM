//BrowserModule helps to execute the angular applications in different browsers
import { BrowserModule } from '@angular/platform-browser';

//NgModule used to create the custom modules
import { NgModule } from '@angular/core';

//AppComponent is the default component
import { AppComponent } from './app.component';

//firstComponent is the user defined component
import { firstComponent } from './first.component';

//1) declarations    2) imports   3) providers      4) bootstrap
//declarations array used to register the components, directives, pipes,.....
//imports array used to register the modules
//providers array used to register the services
//bootstrap array, used to execute particular component

@NgModule({
  declarations: [
    AppComponent,
    firstComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [firstComponent]
})
export class AppModule { }
