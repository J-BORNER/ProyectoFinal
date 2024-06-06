import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-medicos',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    RouterLink,
    FormsModule
  ],
  templateUrl: './medicos.component.html',
  styleUrl: './medicos.component.css'
})
export class MedicosComponent implements OnInit {

  public getJsonValue: any;
  public displayColumn: string[] = ['id','colegiado','nombre_completo','especialidad','edad'];
  public dataSource: any = [];

  constructor(private httpClient: HttpClient ) {}

  ngOnInit(): void {
    this.verMedicos();
  }

  public verMedicos(){
    this.httpClient.get(`http://localhost:9096//medicos`).subscribe((data) => {
      console.table(data);
      this.getJsonValue = data;
      this.dataSource = data;
    });
  }

}
