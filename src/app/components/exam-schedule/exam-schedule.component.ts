import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { ExamSchedule } from '../../_interfaces/exam-schedule';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableComponent } from '../data-table/data-table.component';
import { SelectDropDownComponent } from '../select-drop-down/select-drop-down.component';

@Component({
  selector: 'app-exam-schedule',
  templateUrl: './exam-schedule.component.html',
  styleUrl: './exam-schedule.component.css',
  standalone: true,
  imports:[PreloaderComponent,HeaderMenuComponent,SidebarComponent,FooterComponent, DatepickerComponent, DataTableComponent, SelectDropDownComponent]
})
export class ExamScheduleComponent {

  class = [
    { value: 'Play' },
    { value: 'Nursery' },
    { value: 'Two' },
    { value: 'Three' },
    { value: 'Four' },
    {value: 'Five'}
  ];

  subjects = [
    { value: 'English' },
    { value: 'Mathematics' },
    { value: 'Chemistry' },
    { value: 'Physics' },
    { value: 'Biology' }
  ];

  sections = [
    { value: 'Pink' },
    { value: 'Blue' },
    { value: 'Bird' },
    { value: 'Rose' },
    { value: 'Red' }
  ];

  columnList = [
    { key: 'select', header: '' },
    { key: 'examName', header: 'Exam Name' },
    { key: 'subject', header: 'Subject' },
    { key: 'class', header: 'Class' },
    { key: 'section', header: 'Section' },
    { key: 'time', header: 'Time' },
    { key: 'date', header: 'Date' }
  ];
  

  examData: ExamSchedule[] = [
    {
      examName: 'Midterm Exam',
      subject: 'Mathematics',
      class: '10th Grade',
      section: 'A',
      time: '9:00 AM - 11:00 AM',
      date: '2024-07-20'
    },
    {
      examName: 'Final Exam',
      subject: 'Science',
      class: '10th Grade',
      section: 'B',
      time: '10:00 AM - 12:00 PM',
      date: '2024-07-25'
    },
    {
      examName: 'Unit Test',
      subject: 'English',
      class: '11th Grade',
      section: 'A',
      time: '11:00 AM - 12:00 PM',
      date: '2024-07-22'
    }
  ];
  
  data = new MatTableDataSource<ExamSchedule>(this.examData);

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

  selectedOptions: string[]=[];
  selectedOption: string='';

  handleAllSelectionChange(value: string) {
    this.selectedOptions.forEach(elem =>{
      if(elem === value)
        return;
    });
    this.selectedOptions.push(value);

    console.log('Selected value:', this.selectedOptions);
  }

}
