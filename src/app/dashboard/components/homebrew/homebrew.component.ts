import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/portal/services/auth.service';
import { LinksService } from 'src/app/portal/services/links.service';

@Component({
  selector: 'dashboard-homebrew',
  templateUrl: './homebrew.component.html',
  styleUrls: ['./homebrew.component.css'],
})
export class HomebrewComponent {
  items: MenuItem[] | undefined;
  auth: boolean = false;
  constructor(
    private linksService: LinksService,
    private authService: AuthService
  ) {
    this.auth = this.authService.isAuthenticated();
    this.linksService
      .getLinks(this.auth, this.authService.isAdmin())
      .then((links) => {
        this.items = links;
      });
  }
}
