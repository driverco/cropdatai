import { Component, OnInit, Input, numberAttribute } from '@angular/core';
import { MapsService } from '../../services/maps.service';
import { Map } from '../../models/maps';


@Component({
  selector: 'dashboard-maps',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  map!: Map;
  @Input() id = '0';

  constructor(private mapsService: MapsService) {  
    this.map = {
        id: '0',
        code: '0',
        name: 'NOMAP',
        messages:0
    }
  }




  ngOnInit() {
    
    this.mapsService.getMap(this.id).then((item) => {
      if (item !== undefined) {
        this.map = item;
      }
    });

  }

}



