import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GiphyApiService } from '../../services/giphy-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() results: EventEmitter<object[]> = new EventEmitter();

  constructor(private giphyApiService: GiphyApiService) { }

  ngOnInit() {
  }

  search(keyword: HTMLInputElement){

    let lists = this.giphyApiService.getListsByKeyword(keyword.value);

    this.results.emit(lists);
  }

}
