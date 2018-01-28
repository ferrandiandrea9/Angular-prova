import {Component, OnInit} from '@angular/core';
import {RapportinoService} from '../app/service/rapportino.service'
@Component({
    selector : 'rapportino',
    templateUrl : 'app/view/rapportino.html',
    providers : [RapportinoService]
})

export class RapportinoComponent implements OnInit{
    public rapportini : any;
    public Andrea : any;

    constructor(private _rapportino : RapportinoService){
        
    }
    getRapportino(){
        this.rapportini = this._rapportino.getRapportino();
    }
    ngOnInit() {
        this.getRapportino();
    }
}