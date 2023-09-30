import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';


@Component({
  selector: 'portal-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor() { }

  items: MenuItem[] | undefined;
  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-fw pi-th-large',
        routerLink: "/dashboard"
      },
      {
        label: 'Notificaciones',
        icon: 'pi pi-fw pi-bell',
        routerLink: "/notifications"
      },
    ];

  }

  visible: boolean = false;

  showDialog() {
      this.visible = true;
  }

}


//        routerLink: 'controlList'
