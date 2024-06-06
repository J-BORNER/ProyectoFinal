import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MedicosEditarService } from '../../../services/medicos-editar.service';

@Component({
  selector: 'app-medicos-editar',
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
  templateUrl: './medicos-editar.component.html',
  styleUrl: './medicos-editar.component.css'
})
export class MedicosEditarComponent implements OnInit {

  public medico = {
    id : '',
    colegiado : '',
    nombre_completo : '',
    especialidad : '',
    fecha_registro : '',
    direccion : '',
    centro_hospitalario : '',
    edad : '',
    observacion : ''
  }
  

  constructor(private medicoseditarService:MedicosEditarService, private router:Router, private activatedRoute:ActivatedRoute){}
  
  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.medico);
    if(this.medico.colegiado == '' || this.medico.colegiado == null){
      alert('El colegiado del médico es requerido');
      return
    }

    this.medicoseditarService.editarMedico(this.medico).subscribe(
      (data) => {
        console.log(data);
        alert('El médico se ha actualizado de forma exitosa');
        this.router.navigate(['/show_medicos'])
      },(error) => {
        console.log(error);
        alert('Ha ocurrido un error en el sistema')
      }
    )

  }

}
