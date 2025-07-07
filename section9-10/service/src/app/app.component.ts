import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { ProductsComponent } from './products/products.component';
import { NotificationComponent } from './notification/notification.component';
import { TokensComponent } from './tokens/tokens.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    EmployeesComponent,
    ProductsComponent,
    NotificationComponent,
    TokensComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'service';
}
