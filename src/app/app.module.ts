import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http'
import {ServicioDatos} from './servicios/servicioDatos.service';
import { TablaGeneralComponent } from './tabla-general/tabla-general.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaGeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ServicioDatos
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

