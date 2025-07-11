import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { MessagesComponent } from './messages/messages.component';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ParentComponent,
    MessagesComponent,
    MessagesListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'project';

  messages = signal<string[]>([]);

  addMessage(message: string) {
    this.messages.update((oldMessages) => [...oldMessages, message]);
  }

  get appOutput() {
    console.log('[App Component] binding re-evaluated.');
    return;
  }
}
