import { Pipe, PipeTransform } from '@angular/core';

//TODO trying to add the custom pipe ot make a string instead of an object
@Pipe({
  name: 'stringify'
})
//Add later  implements PipeTransform
export class StringifyPipe {

  // transform(value: string,): unknown {
  //   return JSON.stringify(value);
  // }

}