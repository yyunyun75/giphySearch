import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { GiphyApiService } from '../../services/giphy-api.service';
import { Gif } from '../../models/gif';
import { AppStore } from '../../reducers';
import { actSaveList } from '../../actions/search-results.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    lists: Gif[];
    keyword: string;
    errorMsg: string;
    mode = 'Observable';

    constructor(
        private activatedRoute: ActivatedRoute, 
        private giphyApiService: GiphyApiService,
        private store: Store<AppStore>
    ) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params =>{
            this.keyword = params['keyword'];
            if(this.keyword){
                this.giphyApiService.getLists(this.keyword)
                                    .subscribe(
                                        lists => {
                                            this.lists = lists;
                                            this.store.dispatch(actSaveList(lists));
                                        },
                                        error => this.errorMsg = <any>error
                                    );
            }
        });
    }

    onSearch(results: any){
        this.lists = results;
    }

    needPagination(): boolean{
        return this.lists && this.lists.length > 0;
    }

}
