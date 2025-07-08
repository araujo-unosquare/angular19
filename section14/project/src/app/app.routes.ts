import { Routes } from '@angular/router';
//import { AdminComponent } from './admin/admin.component';
import { testGuard } from './test.guard';
//import { HomeComponent } from './home/home.component';
import { formGuard } from './guards/form.guard';
import { LoginComponent } from './login/login.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ParentComponent } from './parent/parent.component';
import { authGuard } from './guards/auth.guard';
import { UserComponent } from './components/user/user.component';
import { loadAdminGuard } from './guards/load-admin.guard';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  /* { path: 'admin', component: AdminComponent, canActivate: [testGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'form', component: LoginComponent, canDeactivate: [formGuard] }, */
  /* {
    path: 'parent',
    component: ParentComponent,
    canActivateChild: [authGuard],
    children: [
      { path: 'child1', component: Child1Component },
      { path: 'child2', component: Child2Component },
    ],
  },
  { path: '**', redirectTo: '/parent', pathMatch: 'full' }, */
  {
    path: 'home',
    component: AdminComponent,
    canMatch: [loadAdminGuard],
  },
  {
    path: 'home',
    component: UserComponent,
  },
  { path: '**', component: HomeComponent },
];
