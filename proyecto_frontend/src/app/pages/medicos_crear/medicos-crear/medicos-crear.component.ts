import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MedicosCrearService } from '../../../services/medicos-crear.service';

@Component({
  selector: 'app-medicos-crear',
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
  templateUrl: './medicos-crear.component.html',
  styleUrl: './medicos-crear.component.css'
})
export class MedicosCrearComponent implements OnInit {

  public medico = {
    colegiado : '',
    nombre_completo : '',
    especialidad : '',
    fecha_registro : '',
    direccion : '',
    centro_hospitalario : '',
    edad : '',
    observacion : ''
  }
  

  constructor(private medicoscrearService:MedicosCrearService, private router:Router, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void{

  }

  formSubmit(){
    console.log(this.medico);
    if(this.medico.colegiado == '' || this.medico.colegiado == null){
      alert('El colegiado del médico es requerido');
      return
    }

    this.medicoscrearService.registrarMedico(this.medico).subscribe(
      (data) => {
        console.log(data);
        alert('El médico se ha almacenado de forma exitosa');
        this.router.navigate(['/show_medicos'])
      },(error) => {
        console.log(error);
        alert('Ha ocurrido un error en el sistema')
      }
    )

  }

  
}
