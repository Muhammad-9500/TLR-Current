import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ExamGrade } from '../../_interfaces/exam-grade';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableComponent } from '../data-table/data-table.component';
import { SelectDropDownComponent } from "../select-drop-down/select-drop-down.component";



@Component({
  selector: 'app-exam-grade',
  templateUrl: './exam-grade.component.html',
  styleUrl: './exam-grade.component.css',
  standalone: true,
  imports: [PreloaderComponent, HeaderMenuComponent, SidebarComponent, FooterComponent, DataTableComponent, SelectDropDownComponent]
})
export class ExamGradeComponent {

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

  gradePoint = [
    { value: '4.00' },
    { value: '3.65' },
    { value: '3.5' },
    { value: '2.67' },
    { value: '1.99' },
    {value: '2.38'}
  ];

  columnList = [
    { key: 'select', header: '' },
    { key: 'gradeName', header: 'Grade Name' },
    { key: 'gradePoint', header: 'Grade Point' },
    { key: 'percentFrom', header: 'Percent From' },
    { key: 'percentUpto', header: 'Percent Upto' },
    { key: 'comment', header: 'Comment' }
  ];

  gradeData: ExamGrade[] = [
    {
      gradeName: 'A+',
      gradePoint: 4.0,
      percentFrom: 95,
      percentUpto: 100,
      comment: 'Outstanding'
    },
    {
      gradeName: 'A',
      gradePoint: 4.0,
      percentFrom: 90,
      percentUpto: 94.99,
      comment: 'Excellent'
    },
    {
      gradeName: 'B+',
      gradePoint: 3.5,
      percentFrom: 85,
      percentUpto: 89.99,
      comment: 'Very Good'
    },
    {
      gradeName: 'B',
      gradePoint: 3.0,
      percentFrom: 80,
      percentUpto: 84.99,
      comment: 'Good'
    },
    {
      gradeName: 'C+',
      gradePoint: 2.5,
      percentFrom: 75,
      percentUpto: 79.99,
      comment: 'Satisfactory'
    },
    {
      gradeName: 'C',
      gradePoint: 2.0,
      percentFrom: 70,
      percentUpto: 74.99,
      comment: 'Acceptable'
    },
    {
      gradeName: 'D',
      gradePoint: 1.0,
      percentFrom: 60,
      percentUpto: 69.99,
      comment: 'Poor'
    },
    {
      gradeName: 'F',
      gradePoint: 0.0,
      percentFrom: 0,
      percentUpto: 59.99,
      comment: 'Fail'
    }
  ];
  
  data = new MatTableDataSource<ExamGrade>(this.gradeData);

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
  

}
