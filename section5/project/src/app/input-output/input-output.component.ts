import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  imports: [],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.css',
})
export class InputOutputComponent {
  items = input<any[]>([]);

  itemDeleted = output<number>();

  delete(index: number) {
    this.itemDeleted.emit(index);
  }
}
