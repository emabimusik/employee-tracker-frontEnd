
export class DashboardModel { 
    constructor(
                     totalPositions :number,
                      totalOffices  :number,
                     totalEmployees  :number,
                     employeesPerYear: ChartData[],
                     employeesPerOffice: ChartData [],
                    )
                      {}

                 
  }

   class ChartData {
      constructor(   key: string,  value : number){}
     

}