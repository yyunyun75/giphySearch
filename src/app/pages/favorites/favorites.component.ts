import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppStore } from '../../reducers';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

    favorites = this.store.select('favorites');

    constructor(
        private store: Store<AppStore>
    ) { }

    ngOnInit() {

    }

}
