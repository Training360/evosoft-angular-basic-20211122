import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe<T extends {[key: string]: any}> implements PipeTransform {

  transform(
    value: T[] | null,
    phrase: string = '',
    key: string = ''): T[] | null
  {
    if (!Array.isArray(value) || phrase === '') {
      return value;
    }

    phrase = phrase.toLowerCase();

    // Filter when key is not defined.
    if (key === '') {
      return value.filter( item => {
        return Object
                .values(item)
                .join(' ')
                .toLowerCase()
                .includes(phrase);
      });
    }

    // Filter by key.
    return value.filter( item => {
      if (typeof item[key] === 'number') {
        return Number(phrase) === item[key];
      }

      return String(item[key])
              .toLowerCase()
              .includes(phrase);
    });
  }

}
