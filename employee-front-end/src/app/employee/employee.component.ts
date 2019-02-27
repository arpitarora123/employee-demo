import { Component, OnInit } from '@angular/core';
import { EmployeeDetails } from '../models/employee-details';
import { EmployeeDataService } from '../services/employeedata.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeDataService: EmployeeDataService) { }

  employees: EmployeeDetails[];
  employee: EmployeeDetails;
  showEmployee: boolean = false;
  addEmployeeForm: boolean = false;
  successMessage: boolean = false;

  minNum = 15;
  maxNum = 99;

  ngOnInit() {
    this.getEmployeeDetails();
  }

  getEmployeeDetails() {

    return this.employeeDataService.getEmployeeDetails().subscribe(
      (employees) => {
        this.employees = employees
      });
  }

  addEmployee(employeeForm) {

    this.employee = {
      name: employeeForm.value.name,
      age: employeeForm.value.age,
      addresses: {
        currentaddress: employeeForm.value.currentaddress,
        permanentaddress: employeeForm.value.permanentaddress
      }
    }
  
    this.employeeDataService.addEmployeeDetail(this.employee).subscribe();
    this.toggleAddEmployee();
    this.successMessage = true;

  }

  showEmployees() {
    this.showEmployee = !this.showEmployee;
    this.addEmployeeForm = false;
    this.successMessage = false;
    this.getEmployeeDetails();
  }

  toggleAddEmployee() {
    this.showEmployee = false;
    this.addEmployeeForm = !this.addEmployeeForm;
  }
}
