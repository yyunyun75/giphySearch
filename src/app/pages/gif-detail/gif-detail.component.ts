import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { GiphyApiService } from '../../services/giphy-api.service';
import { Gif } from '../../models/gif';
import { AppStore } from '../../reducers';
import { actSaveList } from '../../actions/search-results.actions';
import { actAddFavorite } from '../../actions/favorites.actions';

@Component({
  selector: 'app-gif-detail',
  templateUrl: './gif-detail.component.html',
  styleUrls: ['./gif-detail.component.scss']
})
export class GifDetailComponent implements OnInit {

    keyword: string;
    id: string;
    errorMsg: string;
    gif: Gif;
    candidateList: object[];
    searchResults = this.store.select('searchResults');
    mode = 'Observable';

    constructor(
        private activatedRoute: ActivatedRoute,
        private giphyApiService: GiphyApiService,
        private store: Store<AppStore>,
        private router: Router
    ) { 
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params =>{
            this.keyword = params['keyword'];
            this.id = params['id'];
            if(this.id){
              this.giphyApiService.getDetail(this.id)
                                  .subscribe(
                                      data => this.gif = data,
                                      error => this.errorMsg = <any>error
                                  );
            }
        });

        this.searchResults.subscribe(v => {
            let results = Array.prototype.slice.call(v);
            if(results.length == 0){
                this.giphyApiService.getLists(this.keyword)
                    .subscribe(
                        lists=>{
                            this.candidateList = lists;
                            this.store.dispatch(actSaveList(lists));
                        },
                        error => this.errorMsg = <any>error
                    );
            }else{
                this.candidateList = results;
            }
        });
    }

    //shuffle image
    shuffle(){
      this.candidateList = this.candidateList.filter(list =>{
        return list['id'] !== this.id;
      });

      let len = this.candidateList.length;
      if(len > 0){
        let indx = Math.floor(Math.random()*len);
        let randomId = this.candidateList[indx]['id'];
        this.router.navigate([this.keyword, randomId]);
      }

    }

    //add favorite image
    addFavorite(){
        this.store.dispatch(actAddFavorite(this.gif));
    }

}
