import { Component, OnInit, Input } from '@angular/core';
import { TablaGeneralFila } from '../tablaGeneralFila';
import { ActivatedRoute } from "@angular/router";
import { CompartirService } from "../servicios/compartirD.service";

@Component({
  selector: 'app-tabla-general',
  templateUrl: './tabla-general.component.html',
  styleUrls: ['./tabla-general.component.css']
})
export class TablaGeneralComponent implements OnInit {

  public tablaGeneral: Array<TablaGeneralFila>;
  //@Input() tablaGeneral: Array<TablaGeneralFila>;
  constructor(private route: ActivatedRoute, private servComp: CompartirService) {
    this.tablaGeneral = servComp.getDatos();

  }

  ngOnInit() {
    
  }

}
