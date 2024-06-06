import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class MedicosEditarService {

  constructor(private httpClient: HttpClient ) {}

   public editarMedico(medico:any){
    return this.httpClient.put(`${baseUrl}/medicos`,medico);
   }
}
