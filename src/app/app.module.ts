import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {DataTableModule} from 'angular2-datatable';

/* App Root */
import { AppComponent } from './app.component';
import {  SidebarComponent  }   from './layout/sidebar.component';

/* Feature Modules */


import {  DashboardComponent}    from './dashboard/dashboard.component';
import { EmployeesComponent }    from './employees/empoyees.component';
import {DashboardService} from '../services/dashboard.service';
import {EmployeeService} from '../services/employee.service';
import { nvD3} from './ng2-nvd3';


import 'd3';
import 'nvd3';

/* App Router */
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
 
  { path: 'dashboard',
   component: DashboardComponent
  },
  // 2nd Route
  { path: 'employees',
   component:EmployeesComponent 
  }
  ,
  // 3rd Route
  { path: '**', redirectTo: 'dashboard'}
]



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    EmployeesComponent,
    nvD3,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    RouterModule.forRoot(routes),
    DataTableModule,
  ],
  providers: [DashboardService,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
