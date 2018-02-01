import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import { RapportinoComponent } from './rapportino.component';
import { EsempioHttpComponent } from './esempiohttp.component';

@Component({
    selector: 'applicazione',
    templateUrl: 'app/view/home.html',
    directives : [ROUTER_DIRECTIVES], 
    providers : [ROUTER_PROVIDERS] 
})
@RouteConfig([
    {
        path : '/Andrea',
        name : 'Andrea',
        component : RapportinoComponent
    },
    {
        path : '/EsempioHttp',
        name : 'EsempioHttp',
        component : EsempioHttpComponent
    }
])
export class AppComponent { }
