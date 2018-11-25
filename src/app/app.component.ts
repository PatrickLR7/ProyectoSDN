import { Component, OnInit } from '@angular/core';
import { ServicioDatos} from './servicios/servicioDatos.service';
import { TablaGeneralFila } from './tablaGeneralFila';

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

  constructor(private servDatos: ServicioDatos){
    this.pruebaDatos = [];
    this.tablaGeneral = [];
  }

  ngOnInit(): void{
    //llamar a pedir datos.
    this.pedirDatos();
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
  }
}
