import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fetch-json',
  imports: [AsyncPipe],
  templateUrl: './fetch-json.component.html',
  styleUrl: './fetch-json.component.css',
})
export class FetchJsonComponent {
  jsonData$: Observable<any> | undefined;

  constructor() {
    this.fetchData();
  }

  fetchData() {
    this.jsonData$ = new Observable<any>((observer) => {
      fetch('https://dummyjson.com/products/category-list')
        .then((response) => response.json())
        .then((data) => {
          observer.next(data);
          observer.complete();
        })
        .catch((err) => observer.error(err));
    });
  }
}
