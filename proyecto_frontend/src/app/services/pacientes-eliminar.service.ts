import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PacientesEliminarService {

  constructor(private httpClient: HttpClient ) {}

   public eliminarPaciente(id:any){
    return this.httpClient.delete(`${baseUrl}/pacientes/${id}`);
   }
}
