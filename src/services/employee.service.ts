import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpResponse } from '@angular/common/http';
import { DashboardModel } from '../app/model/dashboard.model'; // The model we defined for the application.
import {Observable } from 'rxjs'; //Observable from rxjs library
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class EmployeeService{

    results : any;
    errorMsg:Error;
    //baseUrl ="http://localhost:61855/api/dashboards";
      baseUrl ="https://employetrack.azurewebsites.net/api/employees";
   
       constructor(private http:HttpClient) {
           this.results = []
           }

     getEmpoloyees(){
       return  this.http.get(this.baseUrl)
     }
        
}