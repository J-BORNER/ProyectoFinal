import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PacientesEditarService {

  constructor(private httpClient: HttpClient ) {}

   public editarPaciente(paciente:any){
    return this.httpClient.put(`${baseUrl}/pacientes`,paciente);
   }
}
