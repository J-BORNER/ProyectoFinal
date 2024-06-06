import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { NgModule } from '@angular/core';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { PacientesComponent } from './pages/pacientes/pacientes/pacientes.component';
import { CitasComponent } from './pages/citas/citas/citas.component';
import { MedicosCrearComponent } from './pages/medicos_crear/medicos-crear/medicos-crear.component';
import { MedicosEditarComponent } from './pages/medicos_editar/medicos-editar/medicos-editar.component';
import { MedicosEliminarComponent } from './pages/medicos-eliminar/medicos-eliminar.component';
import { PacientesCrearComponent } from './pages/pacientes-crear/pacientes-crear.component';
import { PacientesEditarComponent } from './pages/pacientes-editar/pacientes-editar.component';
import { CitasCrearComponent } from './pages/citas-crear/citas-crear.component';
import { CitasEditarComponent } from './pages/citas-editar/citas-editar.component';
import { CitasEliminarComponent } from './pages/citas-eliminar/citas-eliminar.component';
import { PacientesEliminarComponent } from './pages/pacientes-eliminar/pacientes-eliminar.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        pathMatch:'full'
    },
    {
        path:'home',
        component:HomeComponent,
        pathMatch:'full'
    },
    {
        path:'registro',
        component:RegistroComponent,
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent,
        pathMatch:'full'
    },
    {
        path:'show_medicos',
        component:MedicosComponent,
        pathMatch:'full'
    },
    {
        path:'show_pacientes',
        component:PacientesComponent,
        pathMatch:'full'
    },
    {
        path:'show_citas',
        component:CitasComponent,
        pathMatch:'full'
    },
    {
        path:'registro_medico',
        component:MedicosCrearComponent,
        pathMatch:'full'
    },
    {
        path:'editar_medico',
        component:MedicosEditarComponent,
        pathMatch:'full'
    },
    {
        path:'eliminar_medico',
        component:MedicosEliminarComponent,
        pathMatch:'full'
    },
    {
        path:'registro_paciente',
        component:PacientesCrearComponent,
        pathMatch:'full'
    },
    {
        path:'editar_paciente',
        component:PacientesEditarComponent,
        pathMatch:'full'
    },
    {
        path:'eliminar_paciente',
        component:PacientesEliminarComponent,
        pathMatch:'full'
    },
    {
        path:'registro_cita',
        component:CitasCrearComponent,
        pathMatch:'full'
    },
    {
        path:'editar_cita',
        component:CitasEditarComponent,
        pathMatch:'full'
    },
    {
        path:'eliminar_cita',
        component:CitasEliminarComponent,
        pathMatch:'full'
    }

    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
