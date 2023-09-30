import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationService, MessageService, SharedModule } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { PortalComponent } from './components/portal/portal.component';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
  HomeComponent,
  MenuComponent,
  PortalComponent
  ],
  imports: [
    CommonModule, 
    SharedModule, 
    CardModule,
    ButtonModule,
    MenubarModule,
    AvatarModule,
    BadgeModule,
    ToastModule,
    BrowserAnimationsModule,
    DialogModule
    
  ],
  providers:[ConfirmationService, MessageService ],
  exports: [PortalComponent]
})
export class PortalModule {  }
