import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { CrudService, API_MOCKAROO } from './ngx-crud-mocks-api.service';

@Injectable()
export class NgxCrudMocksService extends CrudService {

  private headers: HttpHeaders;
  private readonly apiMockaroo = 'https://api.mockaroo.com/api/generate.json'; 
  private readonly localStorageDefaultkey = 'items'; 

  constructor(private http: HttpClient, @Inject(API_MOCKAROO) private apiKeyMockaroo) {
    super();
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json, text/plain' });
  }
  
  
  
  private create(model: any) {
    model.id = Math.floor(Math.random()*100 + 1);
    this.saveItemToListInLocalStorage(model);
    return new Observable(observer => { observer.next(model), observer.complete() });
  }
  
  private update(model:any) {
    this.updateItemToListInLocalStorage(model);
    return new Observable(observer => { observer.next(model), observer.complete() });
    
  }
  
  save(model: any){
    return model.id ? this.update(model) : this.create(model);
  }

  search(start: number, limit: number, queryParams?: any) {
    if (!this.getListFromLocalStorage()) {
      let params = new HttpParams().set('key', this.apiKeyMockaroo);
      params = params.append('count', '50');
      params = params.append('fields', JSON.stringify(this.crudMockFormat));
      return this.http.get<any[]>(this.apiMockaroo, { params: params }).pipe( 
        map( data => {this.saveListInLocalStorage(data);
            return data.slice(start, start+limit);
        })
      );

    } else {
      return new Observable(observer => { observer.next(this.getListFromLocalStorage().slice(start, start+limit)), observer.complete() });
      
    }
  }

  getById(id: number) {
    return new Observable(observer => { observer.next(this.getItemFromList(id)), observer.complete() });
  }

  getNumTotal() {
    return  new Observable(observer => { observer.next(this.getListFromLocalStorage() ? this.getListFromLocalStorage().length: 0), observer.complete() })
  }


  deleteById(id: number) {
    this.deleteItemToListInLocalStorage(id);
    return new Observable(observer => { observer.next(id), observer.complete() });
  }


  getListFromLocalStorage(): any[] {
    return localStorage.getItem(this.localStorageKeyName ? this.localStorageKeyName :this.localStorageDefaultkey) ? JSON.parse(localStorage.getItem(this.localStorageKeyName ? this.localStorageKeyName :this.localStorageDefaultkey)): undefined;
  }

  private getItemFromList(id: number): any {
    let list: any[] = this.getListFromLocalStorage();
    let itemInList = list.find(elm => elm.id == id);
    return itemInList;
  }

  private saveItemToListInLocalStorage(model: any): void {
    let list: any[] = this.getListFromLocalStorage();
    list.push(model);
    this.saveListInLocalStorage(list);
  }

  private deleteItemToListInLocalStorage(id: number): void {
    let list: any[] = this.getListFromLocalStorage();
    let itemToDelete: any = this.getItemFromList(id);
    let index = list.findIndex(elm => elm.id == itemToDelete.id);
    list.splice(index, 1);
    this.saveListInLocalStorage(list);
  }

  private saveListInLocalStorage(list: any[]) {
    let body = JSON.stringify(list);
    localStorage.setItem(this.localStorageKeyName ? this.localStorageKeyName :this.localStorageDefaultkey, body);
  }

  private updateItemToListInLocalStorage(model: any) {
    let list: any[] = this.getListFromLocalStorage();
    if(this.getItemFromList(model.id)){
      let index = list.findIndex(elm => elm.id == model.id);
      list.splice(index, 1, model);
    };
    this.saveListInLocalStorage(list);
  }



}
