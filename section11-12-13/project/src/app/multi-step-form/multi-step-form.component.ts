import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-multi-step-form',
  imports: [ReactiveFormsModule],
  templateUrl: './multi-step-form.component.html',
  styleUrl: './multi-step-form.component.css',
})
export class MultiStepFormComponent {
  myForm: FormGroup;
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      userDetails: this.fb.group({
        fname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
      }),
      additionalDetails: this.fb.group({
        mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
        address: ['', Validators.required],
        country: ['', Validators.required],
        gender: ['', Validators.required],
      }),
      feedback: this.fb.group({
        comments: [''],
      }),
    });
  }

  step: any = 1;

  get userDetails() {
    return this.myForm.get('userDetails') as FormGroup;
  }

  get additionalDetails() {
    return this.myForm.get('additionalDetails') as FormGroup;
  }

  btnPrevious() {
    this.step -= 1;
  }

  btnNext() {
    const userDetailsGroup = this.myForm.get('userDetails') as FormGroup;
    const additionalDetailsGroup = this.myForm.get(
      'additionalDetails'
    ) as FormGroup;

    if (userDetailsGroup.invalid && this.step == 1) {
      return;
    }

    if (additionalDetailsGroup.invalid && this.step == 2) {
      return;
    }

    if (this.step < 3) {
      this.step += 1;
    }
  }

  formSubmit() {
    if (this.myForm.valid) {
      this.isSubmitted = true;
    }
    console.log(this.myForm.value);
  }
}
