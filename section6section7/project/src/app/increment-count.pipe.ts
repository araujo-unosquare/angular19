import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'incrementCount',
  standalone: true,
  pure: false,
})
export class IncrementCountPipe implements PipeTransform {
  transform(value: number): number {
    console.log('Counter incremented to: ', value);
    return value;
  }
}
