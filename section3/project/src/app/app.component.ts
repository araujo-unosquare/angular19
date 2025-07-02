import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  display = false;

  operatingSystems = [
    { id: 'win', name: 'Windows' },
    { id: 'osx', name: 'MacOS' },
    { id: 'linux', name: 'Linux' },
  ];

  color: string = 'blue';

  currentClasses = {
    saveable: true,
    modified: true,
    special: true,
  };

  darkMode = false;

  isValidEmail = false;

  email = '';

  validateEmail() {
    this.isValidEmail = this.email.includes('@');
  }
}
