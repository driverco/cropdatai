import { Routes } from '@angular/router';
import { NotFoundComponent } from './portal/components/notfound/notfound.component';
import { NotificationsComponent } from './dashboard/components/notifications/notifications.component';
import { HomebrewComponent } from './dashboard/components/homebrew/homebrew.component';
import { MapListComponent } from './dashboard/components/maps/maplist.component';
import { MapComponent } from './dashboard/components/map/map.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { NewsComponent } from './dashboard/components/news/news.component';
import { ModelsPredComponent } from './dashboard/components/modelspred/modelspred.component';

export const routes: Routes = [
    { path: 'home', component: HomebrewComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'maps', component: MapListComponent },
    { path: 'news', component: NewsComponent },
    { path: 'maps/:mapId', component: MapComponent, pathMatch: 'full'  },
    { path: 'modelsai/:mapId', component: ModelsPredComponent, pathMatch: 'full'  },
    { path: 'notfound', component: NotFoundComponent },
    { path: '**', redirectTo: '/notfound', pathMatch: 'full' }
];