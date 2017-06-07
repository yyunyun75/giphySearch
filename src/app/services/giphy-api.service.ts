import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Gif } from '../models/gif';

@Injectable()
export class GiphyApiService {

    private giphyUrl = 'http://api.giphy.com/v1/gifs';
    private apiKey = 'dc6zaTOxFJmzC';

    results: object [] = [];

    constructor(private http: Http) { }

    getLists(keyword: string): Observable<Gif[]>{
        let searchUrl = `${this.giphyUrl}/search?q=${keyword}&api_key=${this.apiKey}`;

        return this.http.get(searchUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    getDetail(id: string): Observable<Gif>{
        let detailUrl = `${this.giphyUrl}/${id}?api_key=${this.apiKey}`;

        return this.http.get(detailUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    private extractData(res: Response){
        let body = res.json();
        //console.log(body);
        return body.data || {};
    }

    private handleError(error: Response | any){
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
