import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnChanges } from '@angular/core';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ChartComponent implements OnChanges{
  @Input() chartType: string = 'line'; // Default to 'line' chart
  @Input() chartData: any[] = [];
  @Input() chartOptions: any = {};
  view: [number, number] | undefined; // Set to undefined for responsive behavior

  // Default to curveBasis for line chart
  curve: any = shape.curveBasis;

  ngOnChanges() {
    // Handle input changes if necessary
    if (this.chartType === 'line') {
      this.curve = shape.curveBasis;
    }
  }

  // Define color schemes
  lineChartColorScheme: Color = {
    name: 'lineScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#007bff', '#dc3545']  // Blue and Red
  };

  barChartColorScheme: Color = {
    name: 'barScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#7FFFD4', '#007bff', '#ffc107']  // Aquamarine, Blue, Yellow
  };

  doughnutChartColorScheme: Color = {
    name: 'doughnutScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#007bff', '#ffc107']  // Blue and Yellow
  };
}
