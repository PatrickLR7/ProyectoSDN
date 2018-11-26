import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TablaGeneralComponent } from './tabla-general/tabla-general.component';
import { TablasPorTemaComponent } from './tablas-por-tema/tablas-por-tema.component';

const routes: Routes = [
  {path: 'tablaGeneralComp', component: TablaGeneralComponent},
  {path: 'tablasTemas', component: TablasPorTemaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
