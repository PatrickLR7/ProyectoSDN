import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../canvasjs.min';
import { CompartirService } from "../servicios/compartirD.service";

@Component({
  selector: 'app-grafico-barra',
  templateUrl: './grafico-barra.component.html',
  styleUrls: ['./grafico-barra.component.css']
})
export class GraficoBarraComponent implements OnInit {

  public datosGrafico: Array<number>;

  constructor(private servComp: CompartirService) {
    
  }

  ngOnInit() {
    let etiquetas = ["Educacion", "Blogs", "Deportes", "Videojuegos", "Wikis", "Foros", "Videos", "Noticias", "Comercios", "Musica"];
    let dataPoints = [];
    this.datosGrafico = this.servComp.getDatosGrafico();

    for(let i = 0; i < this.datosGrafico.length; i++){
      dataPoints.push({y: this.datosGrafico[i], label: etiquetas[i]});      
    }

    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Cantidad de Tráfico por Tema (Bytes)"
      },
      data: [{
        type: "column",
        dataPoints: dataPoints
      }]
    });
    

    chart.render();
  }

}
