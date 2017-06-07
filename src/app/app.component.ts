import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GraphySearch';

  ngOnInit(){
    if(!window.localStorage.getItem('Giphy_Favorites')){
        window.localStorage.setItem('Giphy_Favorites', JSON.stringify([]));
    }
  }
}
