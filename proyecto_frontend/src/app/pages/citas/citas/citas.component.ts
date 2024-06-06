import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    RouterLink,
    FormsModule
  ],
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.css'
})
export class CitasComponent {
  public getJsonValue: any;
  public displayColumn: string[] = ['id','fechayhora','paciente_id','medico_id'];
  public dataSource: any = [];

  constructor(private httpClient: HttpClient ) {}

  ngOnInit(): void {
    this.verCitas();
  }

  public verCitas(){
    this.httpClient.get(`http://localhost:9096/citas`).subscribe((data) => {
      console.table(data);
      this.getJsonValue = data;
      this.dataSource = data;
    });
  }

}
