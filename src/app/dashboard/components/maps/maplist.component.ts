import { Component, OnInit } from '@angular/core';
import { MapsService } from '../../services/maps.service';
import { Map } from '../../models/maps';

@Component({
  selector: 'dashboard-maplist',
  templateUrl: './maplist.component.html',
  styleUrls: ['./maplist.component.css']
})
export class MapListComponent implements OnInit {
  maps!: Map[];

  constructor(private maplistService: MapsService) { }

  ngOnInit() {
    this.maplistService.getMapsSmall().then((items) => (this.maps = items));
  }

}

