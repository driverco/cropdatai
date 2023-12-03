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
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { UserdataComponent } from './components/userdata/userdata.component';
import { UsersComponent } from './components/users/users.component';
import { ProductService } from './services/product.service';


@NgModule({
  declarations: [
  HomeComponent,
  MenuComponent,
  PortalComponent,
  SatisfactionComponent,
  LoginComponent,
  UserdataComponent,
  UsersComponent
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
    InputTextareaModule,
    FormsModule,
    PasswordModule,
    InputTextModule,
    TableModule,
    DropdownModule
  ],
  providers:[ConfirmationService, MessageService ,LinksService,AuthService,ProductService],
  exports: [PortalComponent]
})
export class PortalModule {  }
