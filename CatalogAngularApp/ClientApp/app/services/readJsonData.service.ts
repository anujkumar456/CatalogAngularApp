import { Component, Input,Injectable } from '@angular/core'; 
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
  

@Injectable()
export class ReadJsonFile { 
 
    constructor(private http: Http) { }

    // Get all json data   
    getJSONData(): Observable<any> {      
        let jsonFileURL: string = '/JSONFile/KisokData.json';
        
        return this.http.get(jsonFileURL)
            .map((res: Response) => res.json()); 
    }  
}