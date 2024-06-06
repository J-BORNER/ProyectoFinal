import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { PacientesEliminarService } from '../../services/pacientes-eliminar.service';

@Component({
  selector: 'app-pacientes-eliminar',
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
  templateUrl: './pacientes-eliminar.component.html',
  styleUrl: './pacientes-eliminar.component.css'
})
export class PacientesEliminarComponent {

  public id: any;
  
  constructor(private pacienteseliminarService:PacientesEliminarService, private router:Router, private activatedRoute:ActivatedRoute){}
  
  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.id);
    if(this.id == '' || this.id == null){
      alert('Ingrese el id del paciente que desea eliminar');
      return
    }

    this.pacienteseliminarService.eliminarPaciente(this.id).subscribe(
      (data) => {
        console.log(data);
        alert('El paciente se ha eliminado de forma exitosa');
        this.router.navigate(['/show_pacientes'])
      },(error) => {
        console.log(error);
        alert('Ha ocurrido un error en el sistema')
      }
    )

  }

}
