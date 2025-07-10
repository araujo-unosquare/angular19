import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  imports: [FormsModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css',
})
export class ToDoListComponent {
  todoName: '' | undefined;
  todos: WritableSignal<string[]> = signal([]);

  addTodo(todo: HTMLInputElement): void {
    const item = todo.value;
    this.todos.update((todos) => [item, ...todos]);
    todo.value = '';
    todo.focus();
  }

  removeTodo(index: number): void {
    this.todos.update((todos) => [
      ...todos.slice(0, index),
      ...todos.slice(index + 1),
    ]);
  }
}
