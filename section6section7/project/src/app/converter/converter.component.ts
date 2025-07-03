import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  imports: [CommonModule, FormsModule],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css',
})
export class ConverterComponent {
  weightInPounds: number = 0;
  weightInKilograms: number = 0;

  convertWeight() {
    this.weightInKilograms = this.weightInPounds * 0.453592;
  }
}
