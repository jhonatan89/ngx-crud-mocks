import { Component, OnInit } from '@angular/core';
import { NgxCrudMocksService, CrudService } from 'ngx-crud-mocks';
import { mockFormat } from './exampleMock';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[{provide: CrudService, useClass: NgxCrudMocksService}]
})
export class AppComponent implements OnInit {
  title = 'Ngx Mocks';
  items: any;
  constructor(private service: CrudService){
    this.service.setCrudMockFormat(mockFormat);
  }

  ngOnInit(){
    this.getItems();
  }

  getItems(){
    this.service.search(0,20).subscribe(data => {
      console.log(`Data => ${data}`);
      this.items = data;
    });
  }


}
