import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {
  //TODO REMOVE ANY AAAAA
  transform(value: any, limit?: any): any {
    const perPage = limit.perPage || 20;
    const page = limit.page || 1;
    return value.slice((page - 1) * perPage, page * perPage);
  }

}
