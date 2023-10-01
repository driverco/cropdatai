import { Routes } from '@angular/router';
import { HomeComponent } from './portal/components/home/home.component';
import { NotFoundComponent } from './portal/components/notfound/notfound.component';
import { NotificationsComponent } from './dashboard/components/notifications/notifications.component';
import { HomebrewComponent } from './dashboard/components/homebrew/homebrew.component';
import { MapListComponent } from './dashboard/components/maps/maplist.component';
import { MapComponent } from './dashboard/components/map/map.component';

export const routes: Routes = [
    { path: 'home', component: HomebrewComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'dashboard', component: HomeComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'maps', component: MapListComponent },
    { path: 'maps/:id', component: MapComponent },
    { path: 'notfound', component: NotFoundComponent },
    { path: '**', redirectTo: '/notfound', pathMatch: 'full' }
];