import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Countries } from 'src/app/countries.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countries!: Observable<Countries[]>;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    // this.countries = this.api.getCountries();
  }

}
