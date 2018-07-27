import { Injectable } from "@angular/core";


@Injectable()
export abstract class CrudService{

    abstract save(model:any);
    abstract search(start: number, limit: number, queryParams?: any);
    abstract getById(id: number);
    abstract deleteById(id:number);
    abstract getNumTotal();

}