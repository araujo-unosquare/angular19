import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  host: { ngSkipHydration: 'true' },
})
export class ChildComponent {
  @Input() receiveMessage: string = '';
  @Input() showData: { id: number; name: string }[] = [];
  counter = 0;

  incr() {
    this.counter++;
  }
}
