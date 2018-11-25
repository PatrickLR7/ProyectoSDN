import { Component, OnInit, Input } from '@angular/core';
import { TablaGeneralFila } from '../tablaGeneralFila';
import { ActivatedRoute } from "@angular/router";
import { CompartirService } from "../servicios/compartirD.service";

@Component({
  selector: 'app-tablas-por-tema',
  templateUrl: './tablas-por-tema.component.html',
  styleUrls: ['./tablas-por-tema.component.css']
})
export class TablasPorTemaComponent implements OnInit {

  public tablaGeneral: Array<TablaGeneralFila>;
  public tablaEducacion: Array<TablaGeneralFila>;
  public tablaBlogs: Array<TablaGeneralFila>;
  public tablaDeportes: Array<TablaGeneralFila>;
  public tablaVideojuegos: Array<TablaGeneralFila>;
  public tablaWikis: Array<TablaGeneralFila>;
  public tablaForos: Array<TablaGeneralFila>;
  public tablaVideos: Array<TablaGeneralFila>;
  public tablaNoticias: Array<TablaGeneralFila>;
  public tablaComercios: Array<TablaGeneralFila>;
  public tablaMusica: Array<TablaGeneralFila>;

  constructor(private route: ActivatedRoute, private servComp: CompartirService) {
    this.tablaGeneral = servComp.getDatos();
    this.tablaEducacion = servComp.getDatosEducacion();
    this.tablaBlogs = servComp.getDatosBlogs();
    this.tablaDeportes = servComp.getDatosDeportes();
    this.tablaVideojuegos = servComp.getDatosVideojuegos();
    this.tablaWikis = servComp.getDatosWikis();
    this.tablaForos = servComp.getDatosForos();
    this.tablaVideos = servComp.getDatosVideos();
    this.tablaNoticias = servComp.getDatosNoticias();
    this.tablaComercios = servComp.getDatosComercios();
    this.tablaMusica = servComp.getDatosMusica();
   }

  ngOnInit() {
  }

}
