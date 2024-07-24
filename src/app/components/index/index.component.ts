import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { EarningLineChartComponent } from '../earning-line-chart/earning-line-chart.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenu } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from '../calendar/calendar.component';
import { NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ChartComponent } from '../chart/chart.component';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css',],
  standalone: true,
  imports: [RouterModule, CommonModule , NgbAlertModule, NgbModule ,SidebarComponent, MatMenu,MatButtonToggleModule, ChartComponent , HeaderMenuComponent,FooterComponent, CalendarComponent, PreloaderComponent, EarningLineChartComponent],
  host: {ngSkipHydration: 'true'},
})
export class IndexComponent{   

  isBrowser!: boolean;

constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  
  selectedDate = new Date('2019-01-20'); // Default selected date
    dateOptions: Date[] = [
        new Date('2019-01-20'),
        new Date('2021-01-20'),
        new Date('2020-01-20')
    ];

    selectDate(date: Date) {
        this.selectedDate = date;
    }

    lineChartData = [
      {
        name: 'Total Collection',
        series: [
          { name: 'Mon', value: 50000 },
          { name: 'Tue', value: 10000 },
          { name: 'Wed', value: 50000 },
          { name: 'Thu', value: 14000 },
          { name: 'Fri', value: 70000 },
          { name: 'Sat', value: 50000 },
          { name: 'Sun', value: 75000 }
        ]
      },
      {
        name: 'Fees Collection',
        series: [
          { name: 'Mon', value: 30000 },
          { name: 'Tue', value: 20000 },
          { name: 'Wed', value: 60000 },
          { name: 'Thu', value: 70000 },
          { name: 'Fri', value: 50000 },
          { name: 'Sat', value: 50000 },
          { name: 'Sun', value: 90000 }
        ]
      }
    ];
  
    barChartData = [
      {
        "name": "January",
        "value": 65000
      },
      {
        "name": "February",
        "value": 59000
      },
      {
        "name": "March",
        "value": 80000
      }
    ];
    
  
    doughnutChartData = [
      { name: 'Male', value: 30 },
      { name: 'Female', value: 20 }
     ];
  
    lineChartOptions = {
      legend: true,
      xAxis: true,
      yAxis: true,
      autoScale: true,
      showGridLines: true,
      curve: 'linear', // You can use different interpolation types like 'cardinal', 'step', etc.
      animations: true,
      timeline: false,
    };
  
    barChartOptions = {
      legend: true,
      xAxis: true,
      yAxis: true,
      showGridLines: true,
      animations: true,
      timeline: false,
      showDataLabel: true,
    };
  
    doughnutChartOptions = {
      legend: true,
      doughnut: true,
      animations: true,
    };

}
