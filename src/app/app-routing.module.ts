import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TablaGeneralComponent } from './tabla-general/tabla-general.component';

const routes: Routes = [
  {path: 'tablaGeneralComp', component: TablaGeneralComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
