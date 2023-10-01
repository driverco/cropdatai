import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LinksService } from 'src/app/portal/services/links.service';

@Component({
  selector: 'dashboard-homebrew',
  templateUrl: './homebrew.component.html',
  styleUrls: ['./homebrew.component.css']
})
export class HomebrewComponent {
  constructor(private linksService: LinksService) { }

  items: MenuItem[] | undefined;
  ngOnInit() {
    this.linksService.getLinks().then((links) => (this.items = links));
  }


}
