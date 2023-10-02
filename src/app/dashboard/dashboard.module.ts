import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { DataViewModule } from 'primeng/dataview';
import { NotificationsService } from './services/notifications.service';
import { AvatarModule } from 'primeng/avatar';
import { HomebrewComponent } from './components/homebrew/homebrew.component';
import { MapsService } from './services/maps.service';
import { BadgeModule } from 'primeng/badge';
import { ImageModule } from 'primeng/image';
import { MapListComponent } from './components/maps/maplist.component';
import { MapComponent } from './components/map/map.component';
import { AccordionModule } from 'primeng/accordion';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChartModule } from 'primeng/chart';
import { SensorsService } from './services/sensors.service';
import { PanelModule } from 'primeng/panel';
import { NewsComponent } from './components/news/news.component';
import { ModelsAIComponent } from './components/modelsBoard/modelsAI.component';

@NgModule({
  declarations: [
    NotificationsComponent,
    HomebrewComponent,
    MapListComponent,
    MapComponent,
    DashboardComponent,
    NewsComponent,
    ModelsAIComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    DataViewModule,
    AvatarModule,
    BadgeModule,
    ImageModule,
    AccordionModule,
    ChartModule,
    PanelModule
  ],
  providers: [NotificationsService, MapsService, SensorsService],
  exports: [NotificationsComponent, HomebrewComponent, MapListComponent, MapComponent, DashboardComponent, NewsComponent, ModelsAIComponent]
})
export class DashboardModule { } 
