import { Component, ViewChild, ElementRef } from '@angular/core';
import {
  ConfirmationService,
  MessageService,
  ConfirmEventType,
} from 'primeng/api';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'portal-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class UserdataComponent {
  visible: boolean = false;
  textValue = '';

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private authService: AuthService
  ) {}

  signout() {
    this.visible = true;
    this.authService.signout();
  }
  showUserdata(event: Event) {
    const username = localStorage.getItem("username");
    const role = localStorage.getItem("role");
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: "usuario:"+username + (role==="admin"?"("+role+")":""),
      acceptLabel: ' Cerrar sesión',
      acceptIcon:"pi pi-sign-out",
      rejectVisible:false,
      accept: () => {
        this.signout();
      },
    });
  }
}
