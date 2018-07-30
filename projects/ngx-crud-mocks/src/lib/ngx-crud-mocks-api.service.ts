import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MockConfigModel } from "./ngx-crud-mocks.model";


@Injectable()
export abstract class CrudService{
    apiKeyMockaroo:string;
    crudMockFormat:any;

    public abstract save(model:any);
    public abstract search(start: number, limit: number, queryParams?: any): Observable<{}>;
    public abstract getById(id: number);
    public abstract deleteById(id:number);
    public abstract getNumTotal();

    public setConfig(config : MockConfigModel){
        this.apiKeyMockaroo = config.key;
        this.crudMockFormat = config.crudMockFormat;
    }

}