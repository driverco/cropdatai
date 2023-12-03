import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LinksService } from '../../services/links.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'portal-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  auth: boolean = false;
  items: MenuItem[] | undefined;
  visible: boolean = false;

  constructor(
    private authService: AuthService,
    private linksService: LinksService,
    private router: Router
  ) {
    this.auth = this.authService.isAuthenticated();
    this.linksService.getLinks(this.auth,this.authService.isAdmin()).then((links) => (this.items = links));
    authService.authenticated$.subscribe((auth) => {
      this.auth = auth;
      this.linksService.getLinks(auth,this.authService.isAdmin()).then((links) => (this.items = links));
      if (!auth){
        router.navigate(["/login/_"]);
      }
    });
  }
  showDialog() {
    this.visible = true;
  }
  closeDialog(mapId: string) {
    this.visible = false;
    this.router.navigate(['/maps/' + mapId]);
  }
}
