import { Injectable } from '@angular/core';

@Injectable()
export class LinksService {
    getLinksData() {
        return [
            {
                id: '1000',
                label: 'Dashboard',
                icon: 'pi pi-fw pi-chart-bar',
                routerLink: "/dashboard"
            },
            {
                id: '1001',
                label: 'Notificaciones',
                icon: 'pi pi-fw pi-bell',
                routerLink: "/notifications"
            },
            {
                id: '1002',
                label: 'Mapas',
                icon: 'pi pi-fw pi-map',
                routerLink: "/maps"
            },
            {
                id: '1003',
                label: 'Noticias',
                icon: 'pi pi-fw pi-globe',
                routerLink: "/news"
            },
            {
                id: '1004',
                label: 'Configuracion',
                icon: 'pi pi-fw pi-cog',
                routerLink: "/config"
            },

        ];
    }
    getLinksSmall() {
        return Promise.resolve(this.getLinksData().slice(0, 10));
    }

    getLinks() {
        return Promise.resolve(this.getLinksData());
    }

};