import { Routes } from '@angular/Router';

import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { GifDetailComponent } from './pages/gif-detail/gif-detail.component';

export const routeConfig: Routes = [
    {path: '', component: HomeComponent},
    {path: 'favorites', component: FavoritesComponent},
    {path: ':keyword', component: HomeComponent},
    {path: ':keyword/:id', component: GifDetailComponent},
    {path: '**', component: HomeComponent}
];