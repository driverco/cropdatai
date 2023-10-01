import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../services/notifications.service';
import { Notification } from '../../models/notifications';

@Component({
  selector: 'dashboard-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications!: Notification[];

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit() {
    this.notificationsService.getNotificationsSmall().then((notifs) => (this.notifications = notifs));
  }

}

