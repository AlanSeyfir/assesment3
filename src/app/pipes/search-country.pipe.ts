import { Pipe, PipeTransform } from '@angular/core';

interface ICountry {
  name: {
    official: string;
  };
  // name: Record<string, Item>;
  capital: string | undefined;
  region: string;
  languages: string[] | undefined;
  population: string | number; //TODO Maybe delete number
  flag: string;
}

interface Item {
  // name: number;
  official: number;
}

@Pipe({
  name: 'searchCountry'
})
export class SearchCountryPipe implements PipeTransform {

  transform(countryArr: ICountry[], countryName: string): ICountry[] {
    //I think I need to add the return here before countryArr.filter
    return countryArr.filter((country) => (
      country.name.official as string
    ).toLowerCase()
      .includes(countryName.toLowerCase())
    );
  };
}
