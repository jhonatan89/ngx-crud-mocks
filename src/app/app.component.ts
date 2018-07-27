import { Component, OnInit } from '@angular/core';
import { MockConfigModel, NgxCrudMocksService } from 'ngx-crud-mocks';
import { mockFormat } from './exampleMock';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[{provide: CrudService, useClass: NgxCrudMocksService, useValue: {apiKeyMockaroo: '4174a400', crudMockFormat: mockFormat}}]
  //providers:[NgxCrudMocksService]
})
export class AppComponent implements OnInit {
  title = 'app';
  items: any;
  constructor(private service: NgxCrudMocksService){
    this.service.setConfig({key: '4174a400', crudMockFormat: mockFormat});
  }

  ngOnInit(){
    this.getItems();
  }

  getItems(){
    this.service.search(0,10).subscribe(data => {
      this.items = data;
      console.log(this.items);
    });
  }


}
