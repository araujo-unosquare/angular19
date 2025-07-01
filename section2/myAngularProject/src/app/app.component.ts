import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myAngularProject';
  message = 'Welcome to angular 19';

  inputValue: string = 'Hello';

  isDisabled: boolean = false;

  dynamicText = '';

  display() {
    alert('Click event is triggered');
  }

  onKeyPress(e: any) {
    console.log(e.target.value);
  }
}
