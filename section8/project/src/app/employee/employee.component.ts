import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee',
  imports: [RouterLink],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent {
  id: string = '';
  idQuery: string = '';
  employees = [
    { empId: '101', empName: 'EmpA', empDept: 'General Mgmt Dept' },
    { empId: '102', empName: 'EmpB', empDept: 'Marketing Dept' },
    { empId: '103', empName: 'EmpC', empDept: 'HR Dept' },
    { empId: '104', empName: 'EmpD', empDept: 'Sales Dept' },
  ];

  constructor(private route: ActivatedRoute) {
    const params = this.route.snapshot.params;
    this.id = params['id'];

    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
    });
  }
}
