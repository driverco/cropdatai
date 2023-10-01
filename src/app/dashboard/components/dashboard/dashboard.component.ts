import { Component } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'chart.js'
import { SensorsService } from '../../services/sensors.service';
import { MapsService } from '../../services/maps.service';
import * as _ from 'underscore';
import * as dashUtils from '../../utils';
@Component({
  selector: 'dashboard-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent {
  items: any[] = [];
  sensorsData: any;

  constructor(private sensorsService: SensorsService, private maplistService: MapsService) { }
  ngOnInit() {
    this.maplistService.getMapsSmall().then((maps) => {
      //retrieve maps sensors data
      this.sensorsService.getTempSensors().then((sensorsData) => dashUtils.addSensors(maps, sensorsData, this.items, false));
      this.sensorsService.getHumSensors().then((sensorsData) => {
        dashUtils.addSensors(maps, sensorsData, this.items, false);
        this.items = _.sortBy(this.items, 'name');
      });


    });
    Chart.register(ChartDataLabels);

  }
}



