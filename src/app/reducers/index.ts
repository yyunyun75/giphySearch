import { favoritesReducer } from './favorites.reducer';
import { searchResultsReducer } from './search-results.reducer';


export const appStore = {
    favorites: favoritesReducer,
    searchResults: searchResultsReducer
}

export interface AppStore {
    favorites: object[];
    searchResults: object[];
}
