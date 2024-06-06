import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { PacientesEditarService } from '../../services/pacientes-editar.service';


@Component({
  selector: 'app-pacientes-editar',
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
  templateUrl: './pacientes-editar.component.html',
  styleUrl: './pacientes-editar.component.css'
})
export class PacientesEditarComponent implements OnInit {

  public paciente = {
    id : '',
    nombre : '',
    fecha_nacimiento : '',
    direccion : '',
    edad : '',
    estado : ''
  }
  

  constructor(private pacienteseditarService:PacientesEditarService, private router:Router, private activatedRoute:ActivatedRoute){}
  
  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.paciente);
    if(this.paciente.nombre == '' || this.paciente.nombre == null){
      alert('El nombre del paciente es requerido');
      return
    }

    this.pacienteseditarService.editarPaciente(this.paciente).subscribe(
      (data) => {
        console.log(data);
        alert('El paciente se ha actualizado de forma exitosa');
        this.router.navigate(['/show_pacientes'])
      },(error) => {
        console.log(error);
        alert('Ha ocurrido un error en el sistema')
      }
    )

  }
  

}
