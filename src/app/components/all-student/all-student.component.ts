import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../../_interfaces/student';
import { DataTableComponent } from '../data-table/data-table.component';

const STUDENT_DATA: Student[] = [
  {
    roll: "#0021",
    photo: "assets/img/figure/student2.png",
    name: "Mark Willy",
    gender: "Male",
    class: "2",
    section: "A",
    parents: "Jack Sparrow",
    address: "TA-107 New York",
    dateOfBirth: "02/05/2001",
    phone: "+123 9988568",
    email: "mark.willy@gmail.com"
  },
  {
    roll: "#0022",
    photo: "assets/img/figure/student3.png",
    name: "Jessia Rose",
    gender: "Female",
    class: "1",
    section: "A",
    parents: "Maria Jamans",
    address: "59 Australia, Sydney",
    dateOfBirth: "15/03/2002",
    phone: "+123 9988569",
    email: "jessia.rose@gmail.com"
  },
  {
    roll: "#0023",
    photo: "assets/img/figure/student4.png",
    name: "John Doe",
    gender: "Male",
    class: "3",
    section: "B",
    parents: "Jane Doe",
    address: "56 Los Angeles",
    dateOfBirth: "20/09/2003",
    phone: "+123 9988570",
    email: "john.doe@gmail.com"
  },
  {
    roll: "#0024",
    photo: "assets/img/figure/student5.png",
    name: "Anna Smith",
    gender: "Female",
    class: "2",
    section: "B",
    parents: "Robert Smith",
    address: "21 London",
    dateOfBirth: "07/12/2001",
    phone: "+123 9988571",
    email: "anna.smith@gmail.com"
  },
  {
    roll: "#0025",
    photo: "assets/img/figure/student6.png",
    name: "Peter Parker",
    gender: "Male",
    class: "4",
    section: "C",
    parents: "May Parker",
    address: "89 New York",
    dateOfBirth: "05/08/2000",
    phone: "+123 9988572",
    email: "peter.parker@gmail.com"
  },
  {
    roll: "#0026",
    photo: "assets/img/figure/student7.png",
    name: "Lucy Brown",
    gender: "Female",
    class: "1",
    section: "A",
    parents: "Charlie Brown",
    address: "34 California",
    dateOfBirth: "22/06/2003",
    phone: "+123 9988573",
    email: "lucy.brown@gmail.com"
  },
  {
    roll: "#0027",
    photo: "assets/img/figure/student8.png",
    name: "David Johnson",
    gender: "Male",
    class: "3",
    section: "C",
    parents: "Emma Johnson",
    address: "45 Texas",
    dateOfBirth: "13/04/2002",
    phone: "+123 9988574",
    email: "david.johnson@gmail.com"
  },
  {
    roll: "#0028",
    photo: "assets/img/figure/student9.png",
    name: "Sophia Martinez",
    gender: "Female",
    class: "2",
    section: "B",
    parents: "Luis Martinez",
    address: "76 Florida",
    dateOfBirth: "30/11/2001",
    phone: "+123 9988575",
    email: "sophia.martinez@gmail.com"
  },
  {
    roll: "#0029",
    photo: "assets/img/figure/student10.png",
    name: "Daniel Lee",
    gender: "Male",
    class: "4",
    section: "A",
    parents: "Nancy Lee",
    address: "12 Washington",
    dateOfBirth: "19/01/2000",
    phone: "+123 9988576",
    email: "daniel.lee@gmail.com"
  },
  {
    roll: "#0030",
    photo: "assets/img/figure/student11.png",
    name: "Emma Davis",
    gender: "Female",
    class: "1",
    section: "C",
    parents: "Oliver Davis",
    address: "67 Illinois",
    dateOfBirth: "25/07/2003",
    phone: "+123 9988577",
    email: "emma.davis@gmail.com"
  }
];


@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrl: './all-student.component.css',
  standalone: true,
  imports:[PreloaderComponent,HeaderMenuComponent,SidebarComponent,FooterComponent, DataTableComponent]
})
export class AllStudentComponent {
  columnList = [
    { key: 'select', header: '' },
    { key: 'roll', header: 'Roll' },
    { key: 'photo', header: 'Photo' },
    { key: 'name', header: 'Name' },
    { key: 'gender', header: 'Gender' },
    { key: 'class', header: 'Class' },
    { key: 'section', header: 'Section' },
    { key: 'parents', header: 'Parents' },
    { key: 'address', header: 'Address' },
    { key: 'dateOfBirth', header: 'Date Of Birth' },
    { key: 'phone', header: 'Phone' },
    { key: 'email', header: 'E-mail' },
  ];

  data = new MatTableDataSource<Student>(STUDENT_DATA);

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
