import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-group',
  imports: [ReactiveFormsModule],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.css',
})
export class FormGroupComponent {
  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      age: new FormControl('', Validators.min(18)),
    });
  }

  submitForm() {
    const userAge = this.myForm.get('age')?.value;
    if (userAge < 18) {
      alert('Age must be 18 or older');
      return;
    } else if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }
}
