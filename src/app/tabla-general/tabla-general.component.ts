import { Component, OnInit, Input } from '@angular/core';
import { TablaGeneralFila } from '../tablaGeneralFila';

@Component({
  selector: 'app-tabla-general',
  templateUrl: './tabla-general.component.html',
  styleUrls: ['./tabla-general.component.css']
})
export class TablaGeneralComponent implements OnInit {

  @Input() tablaGeneral: Array<TablaGeneralFila>;
  constructor() { }

  ngOnInit() {
  }

}
