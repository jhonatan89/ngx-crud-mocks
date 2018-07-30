import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxCrudMocksModule} from 'ngx-crud-mocks';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxCrudMocksModule.forRoot({
      apiMockaroo: environment.apiMockaroo
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

