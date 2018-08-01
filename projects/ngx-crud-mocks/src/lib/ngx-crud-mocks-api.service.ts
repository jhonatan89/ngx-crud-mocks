import { Injectable, InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export const API_MOCKAROO = new InjectionToken<string>('API_MOCKAROO');

@Injectable()
export abstract class CrudService{
    protected crudMockFormat:any;
    protected localStorageKeyName:string;

    public abstract save(model:any);
    public abstract search(start?: number, limit?: number, queryParams?: any): Observable<{}>;
    public abstract getById(id: number);
    public abstract deleteById(id:number);
    public abstract getNumTotal(searchParams?:any);

    public setConfigMock(crudMockFormat : any, localStorageKeyName?: string){
        this.crudMockFormat = crudMockFormat;
        this.localStorageKeyName = localStorageKeyName;
    }

}