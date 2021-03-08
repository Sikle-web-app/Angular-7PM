import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgHttpLoaderModule } from 'ng-http-loader';

import { AppComponent } from './app.component';
import { JavaComponent } from './components/java.component';
import { UppercaseComponent } from './components/uppercase.component';

@NgModule({
  declarations: [
    AppComponent,
    JavaComponent,
    UppercaseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [UppercaseComponent]
})
export class AppModule { }
