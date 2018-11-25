import { Component, OnInit } from '@angular/core';
import { ServicioDatos} from './servicios/servicioDatos.service';
import { TablaGeneralFila } from './tablaGeneralFila';
import { Router } from '@angular/router'
import { CompartirService } from './servicios/compartirD.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 

export class AppComponent implements OnInit {
  title = 'angular-proyecto-sdn';
  private pruebaDatos;

  public tablaGeneral: Array<TablaGeneralFila>;
  //public tablaEducacion: Array<TablaGeneralFila>;
  //public tablaBlogs: Array<TablaGeneralFila>;

  opciones = [
    {"id": 1, "name": "Pagina Principal"},
    {"id": 2, "name": "Tablas por Tema"},
    {"id": 3, "name": "Grafico"},
    {"id": 4, "name": "Grafico Circular"}
  ]

  constructor(private servDatos: ServicioDatos, private router: Router, private servComp: CompartirService){
    this.pruebaDatos = [];
    this.tablaGeneral = [];
  }

  ngOnInit(): void{
    //llamar a pedir datos.
    this.router.navigate(['']);
    this.pedirDatos();
  }

  onSelect(opcion){
    if(opcion.name == "Pagina Principal"){
      this.router.navigate(['/tablaGeneralComp',this.tablaGeneral]);
    }
  }

  pedirDatos(): void{
    this.servDatos.jsonServicio().then(response => {
      this.pruebaDatos = response;
      console.log(this.pruebaDatos);
      this.llenarDatos();
    });
  }

  llenarDatos(): void{
    const body = this.pruebaDatos.OFPFlowStatsReply.body;

    for(let i = 0; i < (body.length); i++){
       const match = body[i].OFPFlowStats.match.OFPMatch.oxm_fields;
       
       if(match.length > 3){
        const tablaGeneralFila = new TablaGeneralFila(
          match[match.length-2].OXMTlv.value,
          match[match.length-1].OXMTlv.value,
          body[i].OFPFlowStats.byte_count,
        );
        this.tablaGeneral.push(tablaGeneralFila);
       }
    }

    this.servComp.setDatos(this.tablaGeneral);
  }
}
