import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationService, MessageService, SharedModule } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { PortalComponent } from './components/portal/portal.component';
import { SatisfactionComponent } from './components/satisfaction/satisfaction.component';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { LinksService } from './services/links.service';
import { ImageModule } from 'primeng/image';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
  HomeComponent,
  MenuComponent,
  PortalComponent,
  SatisfactionComponent
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
    DialogModule,
    ImageModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    InputTextareaModule
    
  ],
  providers:[ConfirmationService, MessageService ,LinksService],
  exports: [PortalComponent]
})
export class PortalModule {  }
