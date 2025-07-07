import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees = [
    {
      id: 1,
      name: 'Employee A',
      department: 'Sales Dept',
      location: 'California',
      phone: '111-111-1101',
    },
    {
      id: 2,
      name: 'Employee B',
      department: 'Planning Dept',
      location: 'New Jersey',
      phone: '552-225-2552',
    },
    {
      id: 3,
      name: 'Employee C',
      department: 'HR Dept',
      location: 'Ohio',
      phone: '343-433-3443',
    },
    {
      id: 4,
      name: 'Employee D',
      department: 'Admin Dept',
      location: 'Washington',
      phone: '464-644-4664',
    },
  ];

  getEmployees() {
    return this.employees;
  }
  getEmployeeById(id: number) {
    return this.employees.find((emp) => emp.id === id);
  }
}
