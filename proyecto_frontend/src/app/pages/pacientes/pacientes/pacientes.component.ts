import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    RouterLink,
    FormsModule
  ],
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.css'
})
export class PacientesComponent {

  public getJsonValue: any;
  public displayColumn: string[] = ['id','nombre','direccion','edad'];
  public dataSource: any = [];

  constructor(private httpClient: HttpClient ) {}

  ngOnInit(): void {
    this.verPacientes();
  }

  public verPacientes(){
    this.httpClient.get(`http://localhost:9096/pacientes`).subscribe((data) => {
      console.table(data);
      this.getJsonValue = data;
      this.dataSource = data;
    });
  }

}
