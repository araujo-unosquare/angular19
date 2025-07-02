import { JsonPipe } from '@angular/common';
import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [JsonPipe],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent implements OnChanges, DoCheck {
  @Input() inputValue: string = '';
  @Input() user: any;
  previous: any;
  current: any;

  previousUserName: any;
  ngOnChanges(changes: SimpleChanges): void {
    console.log('calling from ngonchanges', changes);
    if (changes['inputValue']) {
      this.previous = changes['inputValue'].previousValue;
      this.current = changes['inputValue'].currentValue;
    }
  }

  ngDoCheck(): void {
    if (this.user.name != this.previousUserName) {
      this.previousUserName = this.user.name;
      console.log('ngdocheck', this.previousUserName);
    }
  }
}
