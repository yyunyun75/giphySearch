import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

//page components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { GifDetailComponent } from './pages/gif-detail/gif-detail.component';

//common components
import { SearchComponent } from './components/search/search.component';

//services
import { GiphyApiService } from './services/giphy-api.service';

//routes
import { routeConfig } from './app.routes';

//redux data store
import { appStore } from './reducers';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    FavoritesComponent,
    GifDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig),
    StoreModule.provideStore(appStore),
    StoreDevtoolsModule.instrumentStore(),
  ],
  providers: [GiphyApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
