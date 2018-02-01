import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()

export class EsempioHttpService{

    constructor(private _http : Http){

    }
    getPosts(){
        return this._http.get('https://jsonplaceholder.typicode.com/posts')
        .map(esempio => esempio.json());
    }
    pubblicaPost(titolo :string, corpo :string){
        let contenuto = JSON.stringify({userid : 1, id : 101 ,title : titolo, body : corpo});
        return this._http.post('https://jsonplaceholder.typicode.com/posts',contenuto)
        .map( pst => pst.json());
    }
}