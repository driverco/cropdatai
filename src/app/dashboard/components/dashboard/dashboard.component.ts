import { Component } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'chart.js'
import { SensorsService } from '../../services/sensors.service';
import { MapsService } from '../../services/maps.service';
import { Map } from '../../models/maps';
import * as _ from 'underscore';
@Component({
  selector: 'dashboard-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent {
  basicData: any;
  basicOptions = {
    plugins: {
      /*legend: { display: false },*/
      datalabels: { color: "#fff" },
      tooltip: { enabled: false },
    },
    scales: {
      y: {
        max: 50,
        min: -20,
        ticks: {
          stepSize: 5
        }
      }
    }

  };
  basicdataConst2 = {
    labels: ['Humedad (%)'],
    datasets: [
      {
        data: ["30"],
        backgroundColor: ['rgba(13, 13, 255, 0.6)'],
        borderColor: ['rgb(40, 40, 255)'],
        borderWidth: 1
      }
    ]
  }

  items: any[] = [];
  sensorsData: any;
  bgColorsTempUnder = [5, 30, 1000];
  bgColorsTempDefs = ['rgba(132, 132, 255, 0.8)', 'rgba(132, 255, 132, 0.8)', 'rgba(255, 132, 132, 0.8)'];
  bgColorsHumUnder = [5, 10, 1000];
  bgColorsHumDefs = ['rgba(200, 50, 220, 0.8)', 'rgba(100, 50, 220, 0.8)', 'rgba(50, 50, 220, 0.7)'];

  constructor(private sensorsService: SensorsService, private maplistService: MapsService) { }
  ngOnInit() {
    this.maplistService.getMapsSmall().then((maps) => {
      //retrieve maps sensors data
      this.sensorsService.getTempSensors().then((sensorsData) => this.addSensors(maps, sensorsData, this.items));
      this.sensorsService.getHumSensors().then((sensorsData) => {
        this.addSensors(maps, sensorsData, this.items); 
        this.items = _.sortBy(this.items, 'name');
      });


    });
    Chart.register(ChartDataLabels);
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color-primary');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

  }


  addSensors(maps: Map[], sensorsData: any[], items: any[]) {
    //console.log(this.sensorsData);
    for (const map of maps) {
      let sensorsbyMap = sensorsData.filter(sensor => sensor.mapId === map.id);
      let sensorsLabels = groupByValue(sensorsbyMap, "id");
      let sensorsValues = groupByValue(sensorsbyMap, "value");
      let colors = (sensorsbyMap[0].type==="TEMP"?this.bgColorsTempUnder:this.bgColorsHumUnder);
      let defs = (sensorsbyMap[0].type==="TEMP"?this.bgColorsTempDefs:this.bgColorsHumDefs)
      let bgColorsSensors = colorsByValue(sensorsValues, colors, defs);

      items.push(
        {
          "name": map.name,
          "basicData": {
            labels: sensorsLabels,
            datasets: [
              {
                label: sensorsbyMap[0].label,
                data: sensorsValues,
                backgroundColor: bgColorsSensors,
                borderColor: bgColorsSensors,
                borderWidth: 1
              }
            ]
          }

          , "basicOptions": this.basicOptions
        }

      );
    }
  }
}




function groupByValue(arr: any[], key: any) {
  var ret = [];
  for (const x of arr) {
    if (x.hasOwnProperty(key)) {
      ret.push(x[key]);
    }
  }
  return ret;
}
function colorsByValue(arr: number[], limits: number[], defs: string[]) {
  var ret: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    /*console.log("find:"+arr[i]);
    console.log(limits.find((element) => arr[i] < element));
    console.log(defs[ limits.indexOf(limits.find((element) => arr[i] < element)!)]);*/
    ret.push(defs[limits.indexOf(limits.find((element) => arr[i] < element)!)]);
  }
  return ret;
}



