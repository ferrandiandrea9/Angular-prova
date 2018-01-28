import {Injectable} from '@angular/core';
import { RAPPORTINO } from './rapportino';

@Injectable()

export class RapportinoService {
    getRapportino() {
        return RAPPORTINO;
    }
}