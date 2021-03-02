import { DetallecicloComponent } from './components/detalleciclo/detalleciclo.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:"inicio",component:InicioComponent},
  {path:"ciclos/:curso/:grado",component:CiclosComponent},
  {path:"ciclos",component:CiclosComponent},
  {path:"asignaturas",component:AsignaturasComponent},
  {path:"detalle/:curso/:grado/:img",component:DetallecicloComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
