import { Component } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'chart.js'

@Component({
  selector: 'dashboard-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent {
  basicData: any;
  basicOptions: any;


  basicdataConst = {
    labels: ['Temperatura(°C)'],
    datasets: [
      {
        data: [16],
        backgroundColor: ['rgba(255, 13, 13, 1)'],
        borderColor: ['rgb(255, 40, 40)'],
        borderWidth: 1
      }
    ]
  }
  basicdataConst2 = {
    labels: ['Humedad (%)'],
    datasets: [
      {
        data: ["30"],
        backgroundColor: ['rgba(13, 13, 255, 1)'],
        borderColor: ['rgb(40, 40, 255)'],
        borderWidth: 1
      }
    ]
  }

  items: any;
  constructor() { }
  ngOnInit() {
    Chart.register(ChartDataLabels);
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color-primary');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    this.basicOptions = {
      plugins: {
        legend: { display: false },
        datalabels: {color: "#fff"},
        tooltip: { enabled: false },
      },
      scales: {
        y: {
            max: 50,
            min: 0,
            ticks: {
                stepSize: 5
            }
        }
      }

    };


    this.items = [
      { "name": "Cultivo de rosas 1", "basicData": this.basicdataConst, "basicOptions": this.basicOptions },
      { "name": "Cultivo de rosas 2", "basicData": this.basicdataConst, "basicOptions": this.basicOptions },
      { "name": "Cultivo de rosas 3", "basicData": this.basicdataConst, "basicOptions": this.basicOptions },
      { "name": "Cultivo de rosas 4", "basicData": this.basicdataConst, "basicOptions": this.basicOptions },
      { "name": "Cultivo de rosas 5", "basicData": this.basicdataConst, "basicOptions": this.basicOptions },
      { "name": "Cultivo de rosas 1", "basicData": this.basicdataConst2, "basicOptions": this.basicOptions },
      { "name": "Cultivo de rosas 2", "basicData": this.basicdataConst2, "basicOptions": this.basicOptions },
      { "name": "Cultivo de rosas 3", "basicData": this.basicdataConst2, "basicOptions": this.basicOptions },
      { "name": "Cultivo de rosas 4", "basicData": this.basicdataConst2, "basicOptions": this.basicOptions },
      { "name": "Cultivo de rosas 5", "basicData": this.basicdataConst2, "basicOptions": this.basicOptions },
    ];

  }
}
