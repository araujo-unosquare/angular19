import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { JsonPipe } from '@angular/common';
import { InputOutputComponent } from './input-output/input-output.component';
import { ContentComponent } from './content/content.component';
import { HighlightElementDirective } from './highlight-element.directive';
import { ColorPickerComponent } from './color-picker/color-picker.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ChildComponent,
    JsonPipe,
    InputOutputComponent,
    ContentComponent,
    HighlightElementDirective,
    ColorPickerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'project';
  displayMessage = 'Message from parent';
  courses: { id: number; name: string }[] = [
    { id: 1, name: 'JavaScript - Marathon Interview Questions Series' },
    { id: 2, name: 'Mastering React With Interview Questions, eStore Project' },
    { id: 3, name: 'Mastering TypeScript With Marathon Interview Questions' },
    { id: 4, name: 'Mastering HTML,CSS,Sass,Bootstrap + Interview Questions' },
  ];

  items = ['Item 1', 'Item 2', 'Item 3'];

  @ViewChild(ChildComponent) child?: ChildComponent;

  addItem() {
    this.items.push('item ' + (this.items.length + 1));
  }
  onDeleteItem(index: number) {
    this.items.splice(index, 1);
  }

  incrChildCounter() {
    console.log(this.child);
    this.child?.incr();
  }
}
