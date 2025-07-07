import { Component } from '@angular/core';
import { EmployeeService } from '../dependencies/employee.service';

@Component({
  selector: 'app-employees',
  imports: [],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent {
  employees: any[];
  empId: number = 0;
  emp: any;

  constructor(private e: EmployeeService) {
    this.employees = this.e.getEmployees();
  }
  showDetails(employeeId: number) {
    this.empId = employeeId;
    this.emp = this.e.getEmployeeById(employeeId);
  }
}
