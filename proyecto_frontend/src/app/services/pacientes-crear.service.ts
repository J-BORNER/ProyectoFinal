import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PacientesCrearService {

  constructor(private httpClient: HttpClient ) {}

   public registrarPaciente(paciente:any){
    return this.httpClient.post(`${baseUrl}/pacientes`,paciente);
   }
}
