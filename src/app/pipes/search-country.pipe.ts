import { Pipe, PipeTransform } from '@angular/core';

interface Country {
  name: string;
  officialName: string;
  capital: string | undefined;
  region: string;
  languages: string[] | undefined;
  population: string | number; //TODO Maybe delete number
  flag: string;
}

@Pipe({
  name: 'searchCountry'
})
export class SearchCountryPipe implements PipeTransform {



  transform(countryArray: Country[], countryName: string): any[] {
    //I think I need to add the return here before countryArr.filter
    return countryArray.filter((country) => (country.name.official as string).toLowerCase().includes(countryName.toLowerCase()));
  };
}
