import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {  DashboardComponent}    from './dashboard/dashboard.component';
import { EmployeesComponent }    from './employees/empoyees.component';
@NgModule({
    exports: [ RouterModule ]
  })

  export class AppRoutingModule {


  }

  //import { HeroesComponent }      from './heroes/heroes.component';

const routes: Routes = [
  //{ path: 'heroes', component: HeroesComponent }
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // 2nd Route
  { path: 'employees', redirectTo: '/employees' },
  // 3rd Route
  { path: '**', redirectTo: '/dashboard' }
]

