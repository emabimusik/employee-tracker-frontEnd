import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
import { DashboardModel } from '../../app/model/dashboard.model'; // The model we defined for the application.
import { error, Key } from '../../../node_modules/protractor';
import { ErrorHandler } from '../../../node_modules/@angular/router/src/router';
declare let d3: any;
@Component({
  selector: 'dashboard-app',
  templateUrl: './dashboard.component.html',

})

export class DashboardComponent implements OnInit {

  title = 'Dashboard';

  //employeePerOffice;
  //employeePerYear;
  lineChartOptions: {};
  lineChartData: {};
  pieChartOptions: {};
  pieChartData: {};

  data:DashboardModel;
  errorMesage: ErrorHandler
// "node_modules/d3/dist/d3.min.js",
  constructor(private api: DashboardService, private route: ActivatedRoute
   ) { }
  ngOnInit(): void {
    this.getdashbord()
    this.data = []
  };

  getdashbord() {

    this.api.getDashboards().subscribe(results => {
        let resultList = results;
        this.data = resultList;
        
        this.setupCharts(this.data);
       //console.log(this.data['employeesPerOffice'])
       
    },
      error => this.errorMesage = error)

  }

  private setupCharts(data) {
   
    // Configure options for the bar chart
     
    this.lineChartOptions = {
      chart: {
        type: 'historicalBarChart',
        height: 500,
        margin: {
          top: 40,
          right: 50,
          bottom: 60,
          left: 30
        },
        
        x: function (d) { return d.key; },
        y: function (d) { return d.value; },
        xAxis: {
          axisLabel: 'Years',
          rotateLabels: 30
        },
        yAxis: {
          axisLabel: 'Employees',
          axisLabelDistance: -10
        },
        showLegend: false
      }
    };
    console.log( data.employeesPerYear);
    // Bind data to the bar chart
    this.lineChartData = [{
      values: data.employeesPerYear,
      color: '#7777ff',
      area: true
    }];

    // Configure options for the pie chart
    this.pieChartOptions = {
      chart: {
        type: 'pieChart',
        height: 500,
        x: function (d) { return d.key; },
        y: function (d) { return d.value; },
 
        showLabels: true,
        valueFormat: function (d) {
          return d3.format(',.0f')(d) + ' employees';
        },
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        legend: {
          margin: {
            top: 5,
            right: 35,
            bottom: 5,
            left: 0
          }
        }
      }
    };

    // Bind data to the pie chart
   
    this.pieChartData = data.employeesPerOffice;
  
  }

}