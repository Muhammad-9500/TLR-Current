import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { Expense } from '../../_interfaces/expense';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableComponent } from '../data-table/data-table.component';
import { ExamResult } from '../../_interfaces/examresult';

@Component({
  selector: 'app-index4',
  standalone: true,
  imports: [HeaderMenuComponent,SidebarComponent,FooterComponent,PreloaderComponent, DataTableComponent],
  templateUrl: './index4.component.html',
  styleUrl: './index4.component.css',
  host:{ngSkipHydration:'true'}
})
export class Index4Component{

  columnList = [
    { key: 'select', header: '' },
    { key: 'id', header: 'ID' },
    { key: 'expense', header: 'Expense' },
    { key: 'amount', header: 'Amount' },
    { key: 'status', header: 'Status' },
    { key: 'email', header: 'E-Mail' },
    { key: 'date', header: 'Date' }
  ];
  

  expenseData: Expense[] = [
    {
      id: 1,
      expense: 'Office Supplies',
      amount: 500,
      status: 'Pending',
      email: 'john.doe@example.com',
      date: '2024-07-25'
    },
    {
      id: 2,
      expense: 'Travel Expenses',
      amount: 1000,
      status: 'Approved',
      email: 'jane.smith@example.com',
      date: '2024-07-26'
    },
    {
      id: 3,
      expense: 'Marketing Campaign',
      amount: 1500,
      status: 'Rejected',
      email: 'alice.johnson@example.com',
      date: '2024-07-27'
    },
    {
      id: 4,
      expense: 'Transport',
      amount: 1500,
      status: 'Rejected',
      email: 'alice.johnson@example.com',
      date: '2024-07-27'
    }
  ];

  data = new MatTableDataSource<Expense>(this.expenseData);

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

  examColumnList = [
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

examResultdata = new MatTableDataSource<ExamResult>(this.EXAM_RESULTS_DATA);
  
}
