import { AfterViewInit, Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatMenuItem, MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


export interface Column {
  key: string;
  header: string;
}

interface Student {
  name: string;
  presentDays: string[];
}


@Component({
  selector: 'app-data-table2',
  standalone:true,
  imports:[MatTableModule, MatCheckboxModule, MatMenuModule, CommonModule, MatIconModule],
  templateUrl: './data-table2.component.html',
  styleUrls: ['./data-table2.component.css'],
})
export class DataTable2Component implements OnInit {

  displayedColumns: string[] = ['name', 'attendance'];
  dataSource!: MatTableDataSource<Student>;

  students: Student[] = [
    {
      name: 'Michele Johnson',
      presentDays: this.generateAttendance(31, 2) // 31 days in January, 2 absent days
    },
    {
      name: 'Richi Akon',
      presentDays: this.generateAttendance(28, 1) // 28 days in February, 1 absent day
    },
    {
      name: 'Amanda Kherr',
      presentDays: this.generateAttendance(30, 3) // 30 days in March, 3 absent days
    },
    //...
  ];

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.students);
  }

  generateAttendance(daysInMonth: number, absentDays: number): string[] {
    const attendance: string[] = new Array(daysInMonth).fill('check_circle_outline');
    for (let i = 0; i < absentDays; i++) {
      const randomIndex = Math.floor(Math.random() * daysInMonth);
      attendance[randomIndex] = 'cancel';
    }
    return attendance;
  }
}
