import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  save(model:any){

  }
  search(start: number, limit: number, queryParams?: any){
    return new Observable(observer => { 
      observer.next([{"name": "Hola a todos", "price": "$10.5"},{"name": "World", "price": "$15.5"}]), 
      observer.complete()
    });
  }
  getById(id: number){

  }
  deleteById(id:number){

  }
  getNumTotal(){

  }
}
