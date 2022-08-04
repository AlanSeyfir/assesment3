import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'assesment3';

  public searchForm: FormControl = new FormControl('');
  public countries!: Observable<any[]>;

  public API_URL_ALL: string = 'https://restcountries.com/v3.1/all';
  public wiki: string = 'https://en.wikipedia.org/api/rest_v1/page/summary/';

  //For testing apis
  public API_URL = 'https://restcountries.com/v3.1/name/mexico';
  public API_URL_TEST = 'https://restcountries.com/v3.1/name/';

  /**
   * Observable
   */

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.countries = this.http.get<any>('https://restcountries.com/v3.1/all');
    console.log(this.countries);

  }
}
