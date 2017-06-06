import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GiphyApiService } from '../../services/giphy-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    lists: object[];
    keyword: string;

    constructor(
        private activatedRoute: ActivatedRoute, 
        private giphyApiService: GiphyApiService
    ) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params =>{
            this.keyword = params['keyword'];
            if(this.keyword){
                this.lists = this.giphyApiService.getListsByKeyword(this.keyword);
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
