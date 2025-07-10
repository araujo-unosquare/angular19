import { Component, OnInit } from '@angular/core';
import {
  EMPTY,
  filter,
  from,
  interval,
  map,
  mergeMap,
  of,
  range,
  startWith,
  take,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-operators',
  imports: [],
  templateUrl: './operators.component.html',
  styleUrl: './operators.component.css',
})
export class OperatorsComponent implements OnInit {
  constructor() {
    const obsOf$ = of(10, 20, 30).subscribe({
      next: (value) => console.log('next:', value),
      error: (err) => console.log('error:', err),
      complete: () => console.log('the end'),
    });

    // from
    const array = [100, 200, 300];
    const result = from(array);

    result.subscribe((x) => console.log(x));

    //interval
    const numbers = interval(1000);

    const takeFourNumbers = numbers.pipe(take(4));

    takeFourNumbers.subscribe((x) => console.log('Next: ', x));

    // timer
    /* timer(0, 1000).subscribe((n) => console.log('timer', n));
    interval(1000).subscribe((n) => console.log('interval', n)); */

    const number$ = range(1, 10);

    number$.pipe(filter((n) => n > 5)).subscribe(console.log);

    const number2$ = range(1, 5);

    number2$.pipe(map((number) => number * 2)).subscribe(console.log);
  }

  ngOnInit(): void {
    const result = EMPTY.pipe(startWith(7));
    result.subscribe((x) => console.log(x));

    /* const letters = of('a', 'b', 'c');
    const result2 = letters.pipe(
      mergeMap((x) => interval(1000).pipe(map((i) => x + i)))
    );
    result2.subscribe((x) => console.log(x)); */
  }
}
