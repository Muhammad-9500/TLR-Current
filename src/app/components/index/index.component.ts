import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { LayoutComponent } from '../layout/layout.component';
import { EarningLineChartComponent } from '../earning-line-chart/earning-line-chart.component';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenu } from '@angular/material/menu';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CalendarComponent } from '../calendar/calendar.component';
import { NgbPaginationModule, NgbAlertModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LinechartComponent } from '../linechart/linechart.component';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css',],
  standalone: true,
  imports: [RouterModule, CommonModule , NgbAlertModule, NgbModule ,SidebarComponent, MatMenu, MatButtonToggleModule, LinechartComponent, HeaderMenuComponent,FooterComponent, CalendarComponent, PreloaderComponent, EarningLineChartComponent],
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
}
