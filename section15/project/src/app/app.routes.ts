import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'first',
    pathMatch: 'full',
  },
  {
    path: 'first',
    component: FirstComponent,
  },
  {
    path: 'second',
    loadComponent: () =>
      import('./second/second.component').then((m) => m.SecondComponent),
    data: {
      preload: false,
    },
  },
];
