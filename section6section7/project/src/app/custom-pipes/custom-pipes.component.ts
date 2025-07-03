import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SortNumbersPipe } from '../sort-numbers.pipe';
import { IncrementCountPipe } from '../increment-count.pipe';
import { SumOfNumbersPipe } from '../sum-of-numbers.pipe';

@Component({
  selector: 'app-custom-pipes',
  imports: [
    CommonModule,
    FormsModule,
    SortNumbersPipe,
    IncrementCountPipe,
    SumOfNumbersPipe,
  ],
  templateUrl: './custom-pipes.component.html',
  styleUrl: './custom-pipes.component.css',
})
export class CustomPipesComponent {
  numbers: number[] = [3, 5, 1, 4, 2];
  sortOrder: 'asc' | 'desc' = 'asc';
  showList: boolean = false;

  showSorting() {
    this.showList = true;
  }

  countVal: number = 0;
  incrementCounter() {
    this.countVal++;
  }

  myArray = [1, 2, 3];

  updateValue() {
    this.myArray.push(5);
  }
}
