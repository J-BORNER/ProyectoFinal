import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CitasEditarService {

  constructor(private httpClient: HttpClient ) {}

  public editarCitas(cita:any){
   return this.httpClient.put(`${baseUrl}/citas`,cita);
  }
}
