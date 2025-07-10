import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-spinner',
  imports: [NgIf],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css',
})
export class SpinnerComponent {
  fetchData: string = '';
  isLoading: boolean = true;

  ngOnInit(): void {
    timer(3000).subscribe(() => {
      this.isLoading = false;
      this.fetchData = 'Timer function executed...';
    });
  }
}
