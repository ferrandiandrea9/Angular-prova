import {EsempioHttpService} from '../app/service/esempiohttp.service';
import {Router} from '@angular/router-deprecated';
import {Component, OnInit} from '@angular/core';
import { error } from 'util';

@Component({
    templateUrl : 'app/view/esempiohttp.html',
    providers : [EsempioHttpService]
}
)

export class EsempioHttpComponent implements OnInit{
    
    public articoli : any;
    public messaggioerrore : string;

    constructor(private _esempio : EsempioHttpService){
        
    }

    ngOnInit() {
        this.getPostsComponent();
    }
    getPostsComponent(){
        this._esempio.getPosts().subscribe( result => {
            this.articoli = result;
        },
        error => {
            this.messaggioerrore = <any>error;
            if(this.messaggioerrore !== null)
            {
                console.log(this.messaggioerrore);
            }
     });
    }

    pubblicaPost(titolo :string, corpo :string){
        this._esempio.pubblicaPost(titolo,corpo).subscribe(response => { console.log('OK');}, error => {console.log('ERROR');});}
    
    }