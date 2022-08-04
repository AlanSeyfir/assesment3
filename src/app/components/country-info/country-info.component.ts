import { Component, Input, OnInit } from '@angular/core';
import { Countries } from 'src/app/countries.model';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss']
})
export class CountryInfoComponent implements OnInit {
  @Input()
  country!: Countries;


  constructor() { }

  ngOnInit(): void {

  }

}
