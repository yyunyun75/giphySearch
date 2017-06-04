import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    lists: object[];

    constructor() { }

    ngOnInit() {
    }

    onSearch(results: any){
        this.lists = results;
    }

    needPagination(): boolean{
        return this.lists && this.lists.length > 0;
    }

}
