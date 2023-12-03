import { Routes } from '@angular/router';
import { NotFoundComponent } from './portal/components/notfound/notfound.component';
import { NotificationsComponent } from './dashboard/components/notifications/notifications.component';
import { HomebrewComponent } from './dashboard/components/homebrew/homebrew.component';
import { MapListComponent } from './dashboard/components/maps/maplist.component';
import { MapComponent } from './dashboard/components/map/map.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { NewsComponent } from './dashboard/components/news/news.component';
import { ModelsPredComponent } from './dashboard/components/modelspred/modelspred.component';
import { AuthGuard, LoginGuard } from './portal/guard/auth.guard';
import { LoginComponent } from './portal/components/login/login.component';


export const routes: Routes = [
    { path: 'home', component: HomebrewComponent, canActivate:[AuthGuard] },
    { path: '', redirectTo: '/login/', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent , canActivate:[AuthGuard]},
    { path: 'notifications', component: NotificationsComponent , canActivate:[AuthGuard]},
    { path: 'maps', component: MapListComponent, canActivate:[AuthGuard] },
    { path: 'login/:errorType', component: LoginComponent, pathMatch: "full", canActivate:[LoginGuard] },
    { path: 'news', component: NewsComponent , canActivate:[AuthGuard]},
    { path: 'maps/:mapId', component: MapComponent, pathMatch: 'full' , canActivate:[AuthGuard] },
    { path: 'modelsai/:mapId', component: ModelsPredComponent, pathMatch: 'full'  , canActivate:[AuthGuard]},
    { path: 'notfound', component: NotFoundComponent },
    { path: '**', redirectTo: '/notfound', pathMatch: 'full' }
];
