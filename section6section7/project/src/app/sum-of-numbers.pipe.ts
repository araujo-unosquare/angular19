import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumOfNumbers',
  standalone: true,
  pure: false,
})
export class SumOfNumbersPipe implements PipeTransform {
  transform(value: number[]): number {
    let sum = 0;
    for (let num of value) {
      sum += num;
    }
    return sum;
  }
}
