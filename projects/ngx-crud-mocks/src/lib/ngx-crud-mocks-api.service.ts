import { Injectable, InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export const API_MOCKAROO = new InjectionToken<string>('API_MOCKAROO');

@Injectable()
export abstract class CrudService{
    crudMockFormat:any;

    public abstract save(model:any);
    public abstract search(start: number, limit: number, queryParams?: any): Observable<{}>;
    public abstract getById(id: number);
    public abstract deleteById(id:number);
    public abstract getNumTotal();

    public setCrudMockFormat(crudMockFormat : any){
        this.crudMockFormat = crudMockFormat;
    }

}