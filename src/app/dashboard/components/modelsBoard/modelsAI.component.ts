import { Component, Input } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'chart.js'
import { MapsService } from '../../services/maps.service';
import * as _ from 'underscore';
import * as dashUtils from '../../utils';
import { Map } from '../../models/maps';
@Component({
  selector: 'modelsai-modelsai',
  templateUrl: './modelsai.component.html',
  styleUrls: ['./modelsai.component.css']
})
 

export class ModelsAIComponent {
  map!: Map;
  items: any[] = [];

  private _mapId: string = "0";
  @Input() set mapId(id: string) {
    this._mapId = id;
    this.updateMapComponent(this._mapId);
  }
  get mapId(): string {
    return this._mapId;
  }


  constructor(private mapsService: MapsService) { }
  updateMapComponent(mapId: string) {

    Chart.register(ChartDataLabels);

    this.mapsService.getMap(mapId).then((item) => {
      if (item !== undefined) {
        this.map = item;
        dashUtils.addPredict(this.map,  this.items);
      }
    });
  }
}



