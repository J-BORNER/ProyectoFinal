import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CitasEliminarService } from '../../services/citas-eliminar.service';

@Component({
  selector: 'app-citas-eliminar',
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
  templateUrl: './citas-eliminar.component.html',
  styleUrl: './citas-eliminar.component.css'
})
export class CitasEliminarComponent {

  public id: any;
  
  constructor(private citaseliminarService:CitasEliminarService, private router:Router, private activatedRoute:ActivatedRoute){}
  
  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.id);
    if(this.id == '' || this.id == null){
      alert('Ingrese el id de la cita médica que desea eliminar');
      return
    }
    
    this.citaseliminarService.eliminarCita(this.id).subscribe(
      (data) => {
        console.log(data);
        alert('La cita médica se ha eliminado de forma exitosa');
        this.router.navigate(['/show_citas'])
      },(error) => {
        console.log(error);
        alert('Ha ocurrido un error en el sistema')
      }
    )

  }

}
