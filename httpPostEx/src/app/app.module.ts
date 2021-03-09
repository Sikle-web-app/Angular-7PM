import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgHttpLoaderModule } from 'ng-http-loader';

import { AppComponent } from './app.component';
import { UppercaseComponent } from './components/uppercase.component';

@NgModule({
  declarations: [
    AppComponent,
    UppercaseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgHttpLoaderModule.forRoot()
  ],
  providers: [],
  bootstrap: [UppercaseComponent]
})
export class AppModule { }
