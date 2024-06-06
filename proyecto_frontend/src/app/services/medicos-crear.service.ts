import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class MedicosCrearService {

  constructor(private httpClient: HttpClient ) {}

   public registrarMedico(medico:any){
    return this.httpClient.post(`${baseUrl}/medicos`,medico);
   }
}
