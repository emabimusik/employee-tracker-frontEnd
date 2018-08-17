import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse,HttpResponse } from '@angular/common/http';
import { DashboardModel } from '../app/model/dashboard.model'; // The model we defined for the application.
import {Observable } from 'rxjs'; //Observable from rxjs library
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class DashboardService{

 results : any;
 errorMsg:Error;
 //baseUrl ="http://localhost:61855/api/dashboards";
   baseUrl ="https://employetrack.azurewebsites.net/api/dashboards";

    constructor(private http:HttpClient) {
        this.results = []
        }

     public  getDashboards() {
       return this.http.get(this.baseUrl)
       .catch(this.handleError);
    
     //,catchError(this.handleError);
    }
          
        private handleError (error: any) {
            // In a real world app, we might use a remote logging infrastructure
            // We'd also dig deeper into the error to get a better message
            let errMsg = (error.message) ? error.message :
                error.status ? `${error.status} - ${error.statusText}` : 'Server error';
            console.error(errMsg); // log to console instead
            return Observable.throw(errMsg);
        }
          
       
        
}