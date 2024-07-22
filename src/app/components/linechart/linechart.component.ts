import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-linechart',
  standalone: true,
  imports: [NgxChartsModule, ],
  templateUrl: './linechart.component.html',
  styleUrl: './linechart.component.css'
})
export class LinechartComponent{
  lineChartData = [
    {
      name: 'Total Collection',
      series: [
        { name: 'Mon', value: 5e4 },
        { name: 'Tue', value: 1e4 },
        { name: 'Wed', value: 5e4 },
        { name: 'Thu', value: 14e3 },
        { name: 'Fri', value: 7e4 },
        { name: 'Sat', value: 5e4 },
        { name: 'Sun', value: 75e3 }
      ]
    },
    {
      name: 'Fees Collection',
      series: [
        { name: 'Mon', value: 3e4 },
        { name: 'Tue', value: 2e4 },
        { name: 'Wed', value: 6e4 },
        { name: 'Thu', value: 7e4 },
        { name: 'Fri', value: 5e4 },
        { name: 'Sat', value: 5e4 },
        { name: 'Sun', value: 9e4 }
      ]
    }
  ];

  curve = 'cardinal';
  view='undefined';

}
