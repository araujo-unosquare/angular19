import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { ValidationsComponent } from './validations/validations.component';
import { MultiStepFormComponent } from './multi-step-form/multi-step-form.component';
import { CustomValidationComponent } from './custom-validation/custom-validation.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TemplateFormComponent,
    FormGroupComponent,
    FormArrayComponent,
    ValidationsComponent,
    MultiStepFormComponent,
    CustomValidationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'project';
}
