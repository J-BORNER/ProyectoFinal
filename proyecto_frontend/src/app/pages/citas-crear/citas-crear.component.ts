import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CitasCrearService } from '../../services/citas-crear.service';

@Component({
  selector: 'app-citas-crear',
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
  templateUrl: './citas-crear.component.html',
  styleUrl: './citas-crear.component.css'
})
export class CitasCrearComponent implements OnInit{

  public cita = {
    fechayhora : '',
    paciente_id : '',
    medico_id : '',
    estado_cita : ''
  }
  

  constructor(private citascrearService:CitasCrearService, private router:Router, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void{

  }

  formSubmit(){
    console.log(this.cita);
    if(this.cita.fechayhora == '' || this.cita.fechayhora == null){
      alert('La fecha y hora de la cita médica es requerido');
      return
    }

    this.citascrearService.registrarCita(this.cita).subscribe(
      (data) => {
        console.log(data);
        alert('La cita médica se ha almacenado de forma exitosa');
        this.router.navigate(['/show_citas'])
      },(error) => {
        console.log(error);
        alert('Ha ocurrido un error en el sistema')
      }
    )

  }

}
