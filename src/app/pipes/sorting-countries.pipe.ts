import { Pipe, PipeTransform } from '@angular/core';
import { Countries } from '../countries.model';
import { ICountry } from './search-country.pipe';

@Pipe({
  name: 'sortingCountries'
})
export class SortingCountriesPipe implements PipeTransform {

  transform(allCountries: Array<ICountry>,): Array<ICountry> {
    return allCountries.sort((a, b) => {
      return a.name.official.localeCompare(b.name.official);
    }
    );
  }
  // dataCountries.sort((a: any, b: any) => (a.name.common > b.name.common ? 1 : -1));

  // transform(allCountries: Array<ICountry>,): Array<ICountry> {
  //   return allCountries.sort((a, b) => {
  //     if (a.name < b.name) {
  //       return -1;
  //     } else if (a.name > b.name) {
  //       return 1;
  //     } else {
  //       return 0;
  //     }
  //   }
  //   );
  // }

}
