import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Countries } from '../countries.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API: string = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) { }

  getCountries() {
    //This returns me [Object Object]
    return this.http.get<Countries[]>(this.API);
  }
}
