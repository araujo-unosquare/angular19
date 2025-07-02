import { AfterContentChecked, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-random',
  imports: [],
  templateUrl: './random.component.html',
  styleUrl: './random.component.css',
})
export class RandomComponent implements AfterContentChecked {
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked was invoked');
  }
}
