import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TablaGeneralComponent } from './tabla-general/tabla-general.component';
import { TablasPorTemaComponent } from './tablas-por-tema/tablas-por-tema.component';
import { GraficoBarraComponent } from './grafico-barra/grafico-barra.component';
import { GraficoCircularComponent } from './grafico-circular/grafico-circular.component'; 
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

const routes: Routes = [
  {path: '', redirectTo: 'paginalprincipal', pathMatch: 'full'},
  {path: 'tablaGeneralComp', component: TablaGeneralComponent},
  {path: 'tablasTemas', component: TablasPorTemaComponent},
  {path: 'grafico', component: GraficoBarraComponent},
  {path: 'graficoCircular', component: GraficoCircularComponent},
  {path: 'paginaprincipal', component: PaginaPrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
