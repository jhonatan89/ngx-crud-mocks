import { NgModule,ModuleWithProviders, Provider } from '@angular/core';
import { NgxCrudMocksComponent } from './ngx-crud-mocks.component';
import { API_MOCKAROO } from './ngx-crud-mocks-api.service';

export interface NgxCrudMockModuleConfig {
  apiMockaroo: string;
}


@NgModule({
  imports: [
  ],
  declarations: [NgxCrudMocksComponent],
  exports: [NgxCrudMocksComponent]
})
export class NgxCrudMocksModule { 

  static forRoot(config: NgxCrudMockModuleConfig): ModuleWithProviders {
    return {
      ngModule: NgxCrudMocksModule,
      providers: [
        {provide:API_MOCKAROO, useValue: config.apiMockaroo}
      ]
    }
  }





}
