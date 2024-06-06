import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CitasEliminarService {

  constructor(private httpClient: HttpClient ) {}

   public eliminarCita(id:any){
    return this.httpClient.delete(`${baseUrl}/citas/${id}`);
   }
}
