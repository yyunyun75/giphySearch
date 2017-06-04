import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GiphyApiService {

  results: object [] = [];

  constructor(private http: Http) { }

  getListsByKeyword(keyword: string){
    console.log('the keyword is', keyword);
    this.results = [
        {
            'url': 'https://media1.giphy.com/media/3og0IQyaEF7OPkNKJa/200.webp#17-grid1',
            'width': 248,
            'height': 139,
            'keyword': 'person',
            'id': 1234
        },
        {
            'url': 'https://media1.giphy.com/media/3og0IQyaEF7OPkNKJa/200.webp#17-grid1',
            'width': 248,
            'height': 139,
            'keyword': 'guru',
            'id': 34
        },
        {
            'url': 'https://media1.giphy.com/media/3og0IQyaEF7OPkNKJa/200.webp#17-grid1',
            'width': 248,
            'height': 139,
            'keyword': 'man',
            'id': 444
        },
        {
            'url': 'https://media1.giphy.com/media/3og0IQyaEF7OPkNKJa/200.webp#17-grid1',
            'width': 248,
            'height': 139,
            'keyword': 'women',
            'id': 2443
        },
        {
            'url': 'https://media1.giphy.com/media/3og0IQyaEF7OPkNKJa/200.webp#17-grid1',
            'width': 248,
            'height': 139,
            'keyword': 'test',
            'id': 4422
        },
        {
            'url': 'https://media1.giphy.com/media/3og0IQyaEF7OPkNKJa/200.webp#17-grid1',
            'width': 248,
            'height': 139,
            'keyword': 'ad',
            'id': 5332
        }
    ];

    return this.results;
  }
}
