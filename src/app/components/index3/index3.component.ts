import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { FormsModule } from '@angular/forms';
import { DataTableComponent } from '../data-table/data-table.component';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../../_interfaces/student';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarComponent } from '../calendar/calendar.component';
import { ExamResult } from '../../_interfaces/examresult';


@Component({
  selector: 'app-index3',
  standalone: true,
  imports: [SidebarComponent,HeaderMenuComponent ,FooterComponent, CalendarComponent, 
    PreloaderComponent,FormsModule,DataTableComponent,MatTableModule, 
    MatCheckboxModule,MatIconModule, MatButtonModule, MatMenuModule, DataTableComponent],
  templateUrl: './index3.component.html',
  styleUrl: './index3.component.css',
  host: {ngSkipHydration: 'true'},
})
export class Index3Component{

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: false,
    events: [
      { title: 'Meeting', start: new Date() }
    ]
  };

  EXAM_RESULTS_DATA: ExamResult[] = [
    {
      id: "#0021",
      examName: "Class Test",
      subject: "English",
      class: "10th Grade",
      roll: "A001",
      grade: "A",
      percent: "99.00 > 100",
      date: "22/02/2019"
    },
    {
      id: "#0022",
      examName: "Class Test",
      subject: "English",
      class: "10th Grade",
      roll: "A002",
      grade: "A",
      percent: "99.00 > 100",
      date: "22/02/2019"
    },
    {
      id: "#0023",
      examName: "Class Test",
      subject: "Chemistry",
      class: "11th Grade",
      roll: "B001",
      grade: "A",
      percent: "99.00 > 100",
      date: "22/02/2019"
    },
    {
      id: "#0024",
      examName: "Class Test",
      subject: "English",
      class: "10th Grade",
      roll: "A003",
      grade: "A",
      percent: "99.00 > 100",
      date: "22/02/2019"
    },
    {
      id: "#0025",
      examName: "Class Test",
      subject: "Chemistry",
      class: "11th Grade",
      roll: "B002",
      grade: "A",
      percent: "99.00 > 100",
      date: "22/02/2019"
    },
    {
      id: "#0026",
      examName: "Class Test",
      subject: "Chemistry",
      class: "11th Grade",
      roll: "B003",
      grade: "D",
      percent: "70.00 > 100",
      date: "22/02/2019"
    },
    {
      id: "#0027",
      examName: "Class Test",
      subject: "English",
      class: "10th Grade",
      roll: "A004",
      grade: "C",
      percent: "80.00 > 100",
      date: "22/02/2019"
    },
    {
      id: "#0028",
      examName: "Class Test",
      subject: "English",
      class: "10th Grade",
      roll: "A005",
      grade: "B",
      percent: "99.00 > 100",
      date: "22/02/2019"
    },
    {
      id: "#0029",
      examName: "First Semester",
      subject: "English",
      class: "12th Grade",
      roll: "C001",
      grade: "A",
      percent: "99.00 > 100",
      date: "22/02/2019"
    },
    {
      id: "#0030",
      examName: "Mid-Term Exam",
      subject: "Mathematics",
      class: "12th Grade",
      roll: "C002",
      grade: "B",
      percent: "85.00 > 100",
      date: "15/03/2019"
    }
  ];
  

  
  

  columnList = [
     { key: 'select', header: '' },
    { key: 'id', header: 'Id' },
    { key: 'examName', header: 'Exam Name' },
    { key: 'subject', header: 'Subject' },
    { key: 'class', header: 'Class' },
    { key: 'roll', header: 'Roll' },
    { key: 'grade', header: 'Grade' },
    { key: 'percent', header: 'Percent' },
    { key: 'date', header: 'Date' },
    // { key: 'actions', header: 'Actions' },
  ];

  data = new MatTableDataSource<ExamResult>(this.EXAM_RESULTS_DATA);

  ngOnInit() {}

  onClose(event: any) {
    // handle close action
  }

  onEdit(event: any) {
    // handle edit action
  }

  onRefresh(event: any) {
    // handle refresh action
  }

  constructor() {}


}


