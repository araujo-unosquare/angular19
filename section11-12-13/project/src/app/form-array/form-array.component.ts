import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-array',
  imports: [ReactiveFormsModule],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.css',
})
export class FormArrayComponent {
  employeeForm: FormGroup;

  constructor() {
    this.employeeForm = new FormGroup({
      employees: new FormArray([]),
    });
  }

  get employees(): FormArray {
    return this.employeeForm.get('employees') as FormArray;
  }

  addEmployee(): void {
    const employeeGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      job: new FormControl('', Validators.required),
    });
    this.employees.push(employeeGroup);
  }

  submitForm() {
    if (this.employeeForm.invalid) {
      return;
    } else {
      console.log(this.employeeForm.value);
    }
  }
}
