import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { FetchJsonComponent } from './fetch-json/fetch-json.component';
import { OperatorsComponent } from './operators/operators.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AsyncPipe,
    FetchJsonComponent,
    OperatorsComponent,
    SpinnerComponent,
    ProductsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  resolvePromise$: Promise<string>;

  // randomNum = Math.floor(Math.random() * 90) + 10;
  coldObservable$ = new Observable<number>((observer) => {
    let randomNum = Math.floor(Math.random() * 90) + 10;
    observer.next(randomNum);
    observer.complete();
  });

  constructor() {
    this.resolvePromise$ = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise executed');
      }, 2000);
    });

    this.coldObservable$.subscribe({
      next: (value) => console.log(`Subscriber 1: ${value}`),
    });
    this.coldObservable$.subscribe({
      next: (value) => console.log(`Subscriber 2: ${value}`),
    });

    setTimeout(() => {
      this.coldObservable$.subscribe({
        next: (value) => console.log(`Subscriber 3: ${value}`),
      });
    }, 2000);
  }

  ngOnInit(): void {
    const observable = new Observable((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    console.log('justo antes de la suscripción');
    observable.subscribe({
      next(x) {
        console.log('obtenido el valor ' + x);
      },
      error(err) {
        console.error('ha ocurrido un error: ' + err);
      },
      complete() {
        console.log('listo');
      },
    });
    console.log('justo después de la suscripción');
  }
}
