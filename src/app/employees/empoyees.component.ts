import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../app/model/employee.model'; // The model we defined for the application.
import { error, Key } from '../../../node_modules/protractor';
import { ErrorHandler } from '../../../node_modules/@angular/router/src/router';

@Component({
  selector: 'empoyee-app',
  templateUrl: './employees.component.html',

})
export class  EmployeesComponent implements OnInit {
  title = 'Employee Tracker';
  employees:Employee [];
  errorMesage: ErrorHandler;

constructor(private api:EmployeeService){}

ngOnInit(): void {
  this.api.getEmpoloyees().subscribe((results)=>{
    let employeeArr = results['employees'];
    // console.log(employeeArr)
    this.employees = employeeArr,
    error => this.errorMesage = error
  });
  
}





}
