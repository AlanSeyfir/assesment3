import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'assesment3';

  public searchForm: FormControl = new FormControl('');
  //Observable
  public countries!: Observable<any[]>;

  public API_URL_ALL: string = 'https://restcountries.com/v3.1/all';
  public api_old: string = 'https://restcountries.eu/rest/v2/all';
  public wiki: string = 'https://en.wikipedia.org/api/rest_v1/page/summary/';

  //For testing apis
  public API_URL = 'https://restcountries.com/v3.1/name/mexico';
  public API_URL_TEST = 'https://restcountries.com/v3.1/name/';

  constructor(private http: HttpClient, private api: ApiService) {

  }

  ngOnInit(): void {
    //TODO This is for template (delete later)
    this.countries = this.http.get<any>(this.API_URL_ALL);

    //TODO Service the api, need to add in the template
    // this.api.getCountries().subscribe((data) => {
    //   console.log(data);
    // });
  }
}
