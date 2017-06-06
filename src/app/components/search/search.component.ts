import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() existKeyword: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  search(keyword: HTMLInputElement){

    this.router.navigate([keyword.value]);
  }

}
