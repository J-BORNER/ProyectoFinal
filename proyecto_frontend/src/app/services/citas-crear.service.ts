import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CitasCrearService {

  constructor(private httpClient: HttpClient ) {}

   public registrarCita(cita:any){
    return this.httpClient.post(`${baseUrl}/citas`,cita);
   }
}
