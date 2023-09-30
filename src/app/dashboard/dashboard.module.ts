import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AlertsComponent } from './components/alerts/alerts.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { OrderListModule } from 'primeng/orderlist';
import { DragDropModule } from 'primeng/dragdrop';
import { DataViewModule } from 'primeng/dataview';
import { NotificationsService } from './services/notifications.service';
import { AvatarModule } from 'primeng/avatar';
import { HomeComponent } from '../portal/components/home/home.component';
import { HomebrewComponent } from './components/homebrew/homebrew.component';



@NgModule({
  declarations: [
    AlertsComponent,
    NotificationsComponent,
    HomebrewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    OrderListModule,
    DragDropModule,
    DataViewModule,
    AvatarModule

  ],
  providers: [NotificationsService],
  exports: [AlertsComponent, NotificationsComponent, HomebrewComponent]
})
export class DashboardModule { }
