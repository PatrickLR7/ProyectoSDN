import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http'
import {ServicioDatos} from './servicios/servicioDatos.service';
import { TablaGeneralComponent } from './tabla-general/tabla-general.component';
import { CompartirService } from './servicios/compartirD.service';
import { TablasPorTemaComponent } from './tablas-por-tema/tablas-por-tema.component';
import { GraficoBarraComponent } from './grafico-barra/grafico-barra.component';
import { GraficoCircularComponent } from './grafico-circular/grafico-circular.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaGeneralComponent,
    TablasPorTemaComponent,
    GraficoBarraComponent,
    GraficoCircularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ServicioDatos,
    CompartirService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

