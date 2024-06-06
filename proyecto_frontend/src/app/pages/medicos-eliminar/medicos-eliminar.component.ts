import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MedicosEliminarService } from '../../services/medicos-eliminar.service';


@Component({
  selector: 'app-medicos-eliminar',
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
  templateUrl: './medicos-eliminar.component.html',
  styleUrl: './medicos-eliminar.component.css'
})
export class MedicosEliminarComponent {

  public id: any;
  
  constructor(private medicoseliminarService:MedicosEliminarService, private router:Router, private activatedRoute:ActivatedRoute){}
  
  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.id);
    if(this.id == '' || this.id == null){
      alert('Ingrese el id del médico que desea eliminar');
      return
    }

    this.medicoseliminarService.eliminarMedico(this.id).subscribe(
      (data) => {
        console.log(data);
        alert('El médico se ha eliminado de forma exitosa');
        this.router.navigate(['/show_medicos'])
      },(error) => {
        console.log(error);
        alert('Ha ocurrido un error en el sistema')
      }
    )

  }

}
