import { JsonPipe } from '@angular/common';
import {
  Component,
  computed,
  effect,
  linkedSignal,
  OnInit,
  signal,
  untracked,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { CartComponent } from './cart/cart.component';
import { sign } from 'crypto';
import { interval } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { FilterItemsComponent } from './filter-items/filter-items.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    JsonPipe,
    ToDoListComponent,
    CartComponent,
    FilterItemsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: { ngSkipHydration: 'true' },
})
export class AppComponent implements OnInit {
  title = 'project';
  count = signal<number>(0);
  remainingCount = computed(() => 100 - this.count());

  // signalEffect = effect(() => {})

  cart = signal({
    name: 'Product 1',
    email: 'test@test',
  });

  counter1 = signal(0);
  counter2 = signal(0);
  counterUpdate = effect(() => {
    console.log('Counter1: ' + this.counter1());
    console.log('Counter2: ' + untracked(() => this.counter2()));
  });

  constructor() {
    effect(() => {
      console.log('Count: ' + this.count());
      console.log('Remaining Count: ' + this.remainingCount());
    });

    effect((onCleanup) => {
      const user = this.currentUser();
      const timer = setTimeout(() => {
        console.log(`1 second ago, the user became ${user}`);
      }, 1000);
      onCleanup(() => {
        clearTimeout(timer);
      });
    });
  }

  incrCounter() {
    // this.count.set(this.count() + 1);
    this.count.update((res) => res + 1);
  }

  currentUser = signal('Carlos');

  ngOnInit(): void {
    this.cart.update((cartDetails) => ({
      ...cartDetails,
      qty: 3,
      name: 'Prod 2',
    }));
    console.log('updated: ', this.cart());

    // this.linkedValue.set(30);
  }

  updateC1() {
    this.counter1.update(() => this.counter1() + 1);
  }

  updateC2() {
    this.counter2.update(() => this.counter2() + 1);
  }

  /* value = signal(10);
  linkedValue = linkedSignal(() => this.value() * 2);

  counterObservable = interval(1000);
  // Get a `Signal` representing the `counterObservable`'s value.
  counter = toSignal(this.counterObservable, { initialValue: 0 }); */
}
