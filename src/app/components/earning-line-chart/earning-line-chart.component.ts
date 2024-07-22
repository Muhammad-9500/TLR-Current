// earning-line-chart.component.ts
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { BarController, ChartConfiguration, ChartOptions, ChartType, Colors, Legend } from 'chart.js';
import { provideCharts, BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-earning-line-chart',
  templateUrl: './earning-line-chart.component.html',
  styleUrls: ['./earning-line-chart.component.css'],
  standalone: true,
  imports: [BaseChartDirective],
  providers: [provideCharts({ registerables: [BarController, Legend, Colors] })],
})
export class EarningLineChartComponent implements OnInit {

  isBrowser!: boolean;

constructor(@Inject(PLATFORM_ID) private platformId: object) {}

ngOnInit(): void {
  this.isBrowser = isPlatformBrowser(this.platformId);
}

  public earningsChartData: ChartConfiguration['data'] = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [50000, 10000, 50000, 14000, 70000, 50000, 75000],
        backgroundColor: 'rgba(255, 0, 0, 0.3)',
        borderColor: '#ff0000',
        borderWidth: 1,
        pointRadius: 0,
        pointBackgroundColor: '#ff0000',
        pointBorderColor: '#ffffff',
        pointHoverRadius: 6,
        pointHoverBorderWidth: 3,
        fill: 'origin',
        label: 'Total Collection'
      },
      {
        data: [30000, 20000, 60000, 70000, 50000, 50000, 90000],
        backgroundColor: 'rgba(65, 125, 252, 0.3)',
        borderColor: '#417dfc',
        borderWidth: 1,
        pointRadius: 0,
        pointBackgroundColor: '#304ffe',
        pointBorderColor: '#ffffff',
        pointHoverRadius: 6,
        pointHoverBorderWidth: 3,
        fill: 'origin',
        label: 'Fees Collection'
      }
    ]
  };

  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: true,
        ticks: {
          color: "#222222",
          font: {
            size: 16
          },
          padding: 20
        },
        grid: {
          display: true,
          color: '#cccccc'
        }
      },
      y: {
        display: true,
        ticks: {
          color: "#646464",
          font: {
            size: 16
          },
          stepSize: 25000,
          padding: 20,
          callback: function (value) {
            const ranges = [
              { divider: 1e6, suffix: 'M' },
              { divider: 1e3, suffix: 'k' }
            ];

            function formatNumber(n: number) {
              for (let i = 0; i < ranges.length; i++) {
                if (n >= ranges[i].divider) {
                  return (n / ranges[i].divider).toString() + ranges[i].suffix;
                }
              }
              return n.toString();
            }

            return formatNumber(value as number);
          }
        },
        grid: {
          display: true,
          color: '#cccccc'
        }
      }
    },
    plugins: {
      legend: {
        display: true
      },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    },
    elements: {
      line: {
        tension: 0.35
      },
      point: {
        pointStyle: 'circle'
      }
    }
  };

  public lineChartType: ChartType = 'line';
}