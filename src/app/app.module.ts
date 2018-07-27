import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxCrudMocksModule } from 'ngx-crud-mocks';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxCrudMocksModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }