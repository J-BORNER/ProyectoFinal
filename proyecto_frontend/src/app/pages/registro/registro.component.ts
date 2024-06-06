import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-registro',
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
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit {

  public user = {
    username : '',
    password : '',
    nombre : '',
    email : '',
    telefono : '',
    rol : ''
  }

  constructor(private userService:UserService){}

  ngOnInit(): void{

  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      alert('El nombre de usuario es requerido');
      return
    }

    this.userService.registrarUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        alert('El usuario se ha almacenado de forma exitosa');
      },(error) => {
        console.log(error);
        alert('Ha ocurrido un error en el sistema')
      }
    )

  }

}
