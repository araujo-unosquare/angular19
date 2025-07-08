import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TestComponent } from './test/test.component';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, TestComponent, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'project';
}
