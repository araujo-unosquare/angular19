import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SliceComponent } from './slice/slice.component';
import { ConverterComponent } from './converter/converter.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    SliceComponent,
    ConverterComponent,
    CustomPipesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: { ngSkipHydration: 'true' },
})
export class AppComponent {
  employees = [
    { name: 'user A', state: 'california', salary: 50000 },
    { name: 'user B', state: 'New York', salary: 75000 },
  ];
}
