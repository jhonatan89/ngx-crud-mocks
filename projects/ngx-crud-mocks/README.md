# NgxMocks

This library generates fake information for a crud model schema. Fake information is gotten from [Mockaroo Api](https://www.mockaroo.com/api/docs) and it's saved in the browser's localStorage like a objects list. **NgxMocks** allows pushing, editting and deleting objects from list.


## Install and Setup

Use [npm](https://www.npmjs.com/search?q=ng2-typeahead) package manager and execute following command:

`npm install ngx-crud-mocks --save-dev`

First, import *ngx-crud-mocks* module in your main module. You must configure mockaroo api key in forRoot method.The forRoot static method is a convention that provides and configures services at the same time, in this case apiMockaroo value will be injected inside library. If you use a SharedModule that you import in multiple other feature modules, you can export the NgxCrudMocksModule to make sure you don't have to import it in every module.

```typescript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...
    NgxCrudMocksModule.forRoot({
      apiMockaroo: 'yourMockarooApiKey' //You must register in mockaroo and get it Api Key.
    })
    ...
  ],
  exports: [NgxCrudMocksModule]
 
})
export class SharedModule { }
```

Then, in your component configure a provider like this example:

```typescript
import { Component, OnInit } from '@angular/core';
import { NgxCrudMocksService, CrudService } from 'ngx-crud-mocks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[{provide: CrudService, useClass: NgxCrudMocksService}]
})
export class AppComponent implements OnInit {
  ...
}  
```

**CrudService** is an abstract injectable with the most common crud methods.
* save(model: any) - (Can create and update. If model has an id field this method update information)
* search(start: number, limit: number, searchParams?: any)
* getById(id: number)
* deleteById(id: number)
* getNumTotal(searchParams?: any)

If you have a same structure in your real service (Real means when a service consuming API REST) you can connect and disconnect changing *useClass* value between **yourRealservice or NgxCrudMocksService**.


Next, you must configure mockFormat using setCrudMockFormat method in the component's constructor.



```typescript
import { Component, OnInit } from '@angular/core';
import { NgxCrudMocksService, CrudService } from 'ngx-crud-mocks';
import { mockFormat } from './exampleMock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[{provide: CrudService, useClass: NgxCrudMocksService}]
})
export class AppComponent implements OnInit {
  constructor(private service: CrudService){
    this.service.setCrudMockFormat(crudMockFormat: mockFormat);
  }

}  
```

Finally, mockFormat is a json array of field specifications according crud method. For instance for Book model:
```typescript

    interface Book{
        id: number;
        name: string;
        price: string;
        image: string;

    }

```

You can create this mockFormat:

```typescript
export let mockFormat = [

	// Complete in this file specific features for mock types - More information in https://www.mockaroo.com/api/docs
 
	{
			name: 'id',
			type: 'Number',
			min: 1,
			max: 1000
	},
 
	{
			name: 'name',
			type: 'Movie Title',// Simulate book names :)
	},
 
	{
			name: 'price',
			type: 'Money',
			min:	1000,
            max:	200000,
            symbol:	'$'
	},

	{
		name: 'image',
		type: 'Dummy Image URL',
		minHeight:	200,
		maxHeight:	200,
		minWidth:	200,
		maxWidth:	200,
		format: 'png'

	}
 
]

```
For more details go to [Mockaroo Api](https://www.mockaroo.com/api/docs). 


Thanks

2018