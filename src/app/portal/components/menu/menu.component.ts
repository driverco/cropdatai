import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LinksService } from '../../services/links.service';
import { Router } from '@angular/router';


@Component({
  selector: 'portal-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private linksService: LinksService, private router: Router) { }

  items: MenuItem[] | undefined;
  ngOnInit() {
    this.linksService.getLinks().then((links) => (this.items = links));
  }

  visible: boolean = false;
  showDialog() {
    this.visible = true;
  }
  closeDialog(mapId:string) {
    this.visible = false;
    this.router.navigate(['/maps/'+mapId])
  }

}


//        routerLink: 'controlList'
