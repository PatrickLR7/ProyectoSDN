import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../canvasjs.min';
import { CompartirService } from "../servicios/compartirD.service";

@Component({
  selector: 'app-grafico-circular',
  templateUrl: './grafico-circular.component.html',
  styleUrls: ['./grafico-circular.component.css']
})
export class GraficoCircularComponent implements OnInit {

  public datosGraficoPie: Array<number>;

  constructor(private servComp: CompartirService) { }

  ngOnInit() {
    let etiquetas = ["Educacion", "Blogs", "Deportes", "Videojuegos", "Wikis", "Foros", "Videos", "Noticias", "Comercios", "Musica"];
    let dataPoints = [];
    this.datosGraficoPie = this.servComp.getDatosGrafico();

    for(let i = 0; i < this.datosGraficoPie.length; i++){
      dataPoints.push({y: this.datosGraficoPie[i], name: etiquetas[i]});      
    }

    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text: "Porcentaje de Trafico por Tema"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: {y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: dataPoints
      }]
    });
      
    chart.render();
  }

}
