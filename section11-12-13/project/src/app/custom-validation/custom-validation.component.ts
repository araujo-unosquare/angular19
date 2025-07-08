import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { urlValidator } from '../custom-validators/url-validator';

@Component({
  selector: 'app-custom-validation',
  imports: [ReactiveFormsModule],
  templateUrl: './custom-validation.component.html',
  styleUrl: './custom-validation.component.css',
})
export class CustomValidationComponent {
  validateURL: FormGroup;

  constructor(private fb: FormBuilder) {
    this.validateURL = this.fb.group({
      checkURL: ['', [Validators.required, urlValidator]],
    });
  }
  validate() {
    if (!this.validateURL.valid) {
      alert('Please enter correct URL');
      return false;
    } else {
      return alert('URL is valid');
    }
  }
}
