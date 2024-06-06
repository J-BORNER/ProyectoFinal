import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { PacientesCrearService } from '../../services/pacientes-crear.service';

@Component({
  selector: 'app-pacientes-crear',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule
  ],
  templateUrl: './pacientes-crear.component.html',
  styleUrl: './pacientes-crear.component.css'
})
export class PacientesCrearComponent implements OnInit{
 
  public paciente = {
    nombre : '',
    fecha_nacimiento : '',
    direccion : '',
    edad : '',
    estado : ''
  }
  

  constructor(private pacientescrearService:PacientesCrearService, private router:Router, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void{

  }

  formSubmit(){
    console.log(this.paciente);
    if(this.paciente.nombre == '' || this.paciente.nombre == null){
      alert('El nombre del paciente es requerido');
      return
    }

    this.pacientescrearService.registrarPaciente(this.paciente).subscribe(
      (data) => {
        console.log(data);
        alert('El paciente se ha almacenado de forma exitosa');
        this.router.navigate(['/show_pacientes'])
      },(error) => {
        console.log(error);
        alert('Ha ocurrido un error en el sistema')
      }
    )

  }
  

}
