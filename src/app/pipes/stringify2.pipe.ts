import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringify2'
})
export class Stringify2Pipe implements PipeTransform {

  transform(stringArr: Array<string> | undefined): string {
    //? Inlanguage it says no data, wrong way to do it this ternary operator
    return (stringArr && stringArr.length > 0) ? stringArr.join(', ') : 'No data';

    // if (stringArr === undefined) {
    //   return 'No data to display';
    // } else if (stringArr.length > 0) {
    //   return stringArr.join(', ');
    // }
    //stringArr.length > 0 ? stringArr.join(', ') : 'No data to display';
    // return stringArr.join(', ');
  }

}
