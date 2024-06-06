import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  constructor(private httpClient: HttpClient ) {}

   public verMedicos(){
    return this.httpClient.get(`${baseUrl}/medicos`);
   }
}
