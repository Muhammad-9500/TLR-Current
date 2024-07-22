import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { StudentAttendance } from '../../_interfaces/student-attendance';
import { MatTableDataSource } from '@angular/material/table';
import { DataTable2Component } from '../data-table2/data-table2.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SelectDropDownComponent } from '../select-drop-down/select-drop-down.component';

interface Student {
  name: string;
  presentDays: boolean[];
}

@Component({
  selector: 'app-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrl: './student-attendance.component.css',
  standalone: true,
  imports:[PreloaderComponent,HeaderMenuComponent,SidebarComponent,FooterComponent, MatIconModule,SelectDropDownComponent, CommonModule]
})
export class StudentAttendanceComponent {

  
  sessions = [
    { value: '2016/2017' },
    { value: '2017/2018' },
    { value: '2018/2019' },
    { value: '2019/2020' },
    { value: '2020/2021' }
  ];

  months = [
    { value: 'January' },
    { value: 'February' },
    { value: 'March' },
    { value: 'April' },
    { value: 'May' },
    { value: 'June' },
    { value: 'July' },
    { value: 'August' },
    { value: 'September' },
    { value: 'October' },
    { value: 'November' },
    { value: 'December' }
  ];

  class = [
    { value: 'Play' },
    { value: 'Nursery' },
    { value: 'Two' },
    { value: 'Three' },
    { value: 'Four' },
    {value: 'Five'}
  ];

  sections = [
    { value: 'Pink' },
    { value: 'Blue' },
    { value: 'Bird' },
    { value: 'Rose' },
    { value: 'Red' }
  ];

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

  columnList = [
    { key: 'name', header: 'Students', width: '150px', class: 'text-left' },
    { key: 'attendance0', header: '1', width: '30px' },
    { key: 'attendance1', header: '2', width: '30px' },
    { key: 'attendance2', header: '3', width: '30px' },
    { key: 'attendance3', header: '4', width: '30px' },
    { key: 'attendance4', header: '5', width: '30px' },
    { key: 'attendance5', header: '6', width: '30px' },
    { key: 'attendance6', header: '7', width: '30px' },
    { key: 'attendance7', header: '8', width: '30px' },
    { key: 'attendance8', header: '9', width: '30px' },
    { key: 'attendance9', header: '10', width: '30px' },
    { key: 'attendance10', header: '11', width: '30px' },
    { key: 'attendance11', header: '12', width: '30px' },
    { key: 'attendance12', header: '13', width: '30px' },
    { key: 'attendance13', header: '14', width: '30px' },
    { key: 'attendance14', header: '15', width: '30px' },
    { key: 'attendance15', header: '16', width: '30px' },
    { key: 'attendance16', header: '17', width: '30px' },
    { key: 'attendance17', header: '18', width: '30px' },
    { key: 'attendance18', header: '19', width: '30px' },
    { key: 'attendance19', header: '20', width: '30px' },
    { key: 'attendance20', header: '21', width: '30px' },
    { key: 'attendance21', header: '22', width: '30px' },
    { key: 'attendance22', header: '23', width: '30px' },
    { key: 'attendance23', header: '24', width: '30px' },
    { key: 'attendance24', header: '25', width: '30px' },
    { key: 'attendance25', header: '26', width: '30px' },
    { key: 'attendance26', header: '27', width: '30px' },
    { key: 'attendance27', header: '28', width: '30px' },
    { key: 'attendance28', header: '29', width: '30px' },
    { key: 'attendance29', header: '30', width: '30px' },
    { key: 'attendance30', header: '31', width: '30px' }
];

ATTENDANCE_DATA: StudentAttendance[] = [
  {
    studentName: 'Michele Johnson',
    day1: true,
    day2: true,
    day3: false,
    day4: true,
    day5: false,
    day6: true,
    day7: true,
    day8: false,
    day9: true,
    day10: true,
    day11: true,
    day12: false,
    day13: true,
    day14: true,
    day15: false,
    day16: true,
    day17: true,
    day18: false,
    day19: true,
    day20: true,
    day21: true,
    day22: false,
    day23: true,
    day24: true,
    day25: false,
    day26: true,
    day27: true,
    day28: false,
    day29: true,
    day30: true,
  },
  {
    studentName: 'Richi Akon',
    day1: true,
    day2: false,
    day3: true,
    day4: false,
    day5: true,
    day6: true,
    day7: false,
    day8: true,
    day9: false,
    day10: true,
    day11: true,
    day12: false,
    day13: true,
    day14: true,
    day15: false,
    day16: true,
    day17: true,
    day18: true,
    day19: false,
    day20: true,
    day21: true,
    day22: false,
    day23: true,
    day24: false,
    day25: true,
    day26: true,
    day27: true,
    day28: false,
    day29: true,
    day30: true,
  },
  // Add more sample data as needed
];
data = new MatTableDataSource<StudentAttendance>(this.ATTENDANCE_DATA);

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


students: Student[] = [
  {
    name: 'Michele Johnson',
    presentDays: new Array(30).fill(false).map((_, i) => Math.random() < 0.7)
  },
  {
    name: 'Richi Akon',
    presentDays: new Array(30).fill(false).map((_, i) => Math.random() < 0.7)
  },
  {
    name: 'Amanda Kherr',
    presentDays: new Array(30).fill(false).map((_, i) => Math.random() < 0.7)
  },
  {
    name: 'Emily Chen',
    presentDays: new Array(30).fill(false).map((_, i) => Math.random() < 0.7)
  },
  {
    name: 'David Lee',
    presentDays: new Array(30).fill(false).map((_, i) => Math.random() < 0.7)
  },
  {
    name: 'Sophia Patel',
    presentDays: new Array(30).fill(false).map((_, i) => Math.random() < 0.7)
  },
  {
    name: 'Olivia Brown',
    presentDays: new Array(30).fill(false).map((_, i) => Math.random() < 0.7)
  }
];

days: number[] = Array(30).fill(0).map((_, i) => i + 1);



}
