import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core/index.js';
import { CalendarComponent } from '../calendar/calendar.component';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-ui-widget',
  templateUrl: './ui-widget.component.html',
  styleUrl: './ui-widget.component.css',
  standalone: true,
  imports:[PreloaderComponent,HeaderMenuComponent,SidebarComponent,FooterComponent, CalendarComponent, ChartComponent]
})
export class UiWidgetComponent {
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: false,
    events: [
      { title: 'Meeting', start: new Date() }
    ]
  };

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
    curve: 'linear',
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
