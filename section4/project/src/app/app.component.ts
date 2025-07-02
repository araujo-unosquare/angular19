import { AfterContentInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { RandomComponent } from './random/random.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    TestComponent,
    RandomComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, AfterContentInit {
  inputValue = 'test';

  datafromParent = '';

  user = {
    name: 'Carlos',
  };

  ngOnInit(): void {
    console.log('component init');
  }

  updateValue() {
    this.inputValue = 'new value';
  }

  changeUserName() {
    this.user.name = 'Orlando';
  }

  sendDataToChild() {
    let random = Math.floor(Math.random() * 10);
    this.datafromParent = 'Random number: ' + random;
  }

  ngAfterContentInit(): void {
    console.log('aftercontentinit invoked');
  }
}
