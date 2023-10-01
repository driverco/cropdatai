import { Component, OnInit, Input } from '@angular/core';
import { MapsService } from '../../services/maps.service';
import { Map } from '../../models/maps';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { SensorsService } from '../../services/sensors.service';
import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import * as dashUtils from '../../utils';
import { NotificationsService } from '../../services/notifications.service';
import { Notification } from '../../models/notifications';


@Component({
  selector: 'dashboard-maps',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  map!: Map;
  sensorItems: any[] = [];
  notifications: Notification[] = [];
  @Input() id = '0';




  private _mapId: string = "0";
    
  @Input() set mapId(id: string) {
  
     this._mapId = id;
     this.updateMapComponent(this._mapId);
  
  }
  
  get mapId(): string {
      return this._mapId;
  }



  constructor(
    private mapsService: MapsService,
    private location: Location,
    private route: ActivatedRoute,
    private sensorsService: SensorsService,
    private notificationsService: NotificationsService) {
    this.map = {
      id: '0',
      code: '0',
      name: 'NOMAP',
      messages: 0
    }
  }

  ngOnInit() {
  }
  updateMapComponent(mapId:string){

      Chart.register(ChartDataLabels);

      this.mapsService.getMap(mapId).then((item) => {
        if (item !== undefined) {
          this.map = item;

          this.sensorsService.getTempSensorsbyMap(this.map.id!).then((sensorsData) => {
            for (const sens of sensorsData) {
              dashUtils.addSensors([this.map], [sens], this.sensorItems, true);
            }
          });
          this.sensorsService.getHumSensorsbyMap(this.map.id!).then((sensorsData) => {
            for (const sens of sensorsData) {
              dashUtils.addSensors([this.map], [sens], this.sensorItems, true);
            }
          });
          this.notificationsService.getNotificationsByMap(this.map.id!).then((notifs) => {
            //console.log(notifs);
            this.notifications = notifs!;
          });


        }
    });
  }

  back(): void {
    this.location.back()
  }
}








