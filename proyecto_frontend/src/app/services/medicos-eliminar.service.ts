import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class MedicosEliminarService {

  constructor(private httpClient: HttpClient ) {}

   public eliminarMedico(id:any){
    return this.httpClient.delete(`${baseUrl}/medicos/${id}`);
   }
}
