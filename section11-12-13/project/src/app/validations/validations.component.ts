import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-validations',
  imports: [ReactiveFormsModule],
  templateUrl: './validations.component.html',
  styleUrl: './validations.component.css',
})
export class ValidationsComponent {
  myForm: FormGroup;
  nameControl: FormControl;
  emailControl: FormControl;

  constructor() {
    this.nameControl = new FormControl('', Validators.required);
    this.emailControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.myForm = new FormGroup({
      name: this.nameControl,
      email: this.emailControl,
    });
  }

  formSubmit() {
    if (this.myForm.valid) {
      console.log('Form Values: ', this.myForm.value);
    }
  }
}
