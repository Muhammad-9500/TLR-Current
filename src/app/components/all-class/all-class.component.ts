import { Component } from '@angular/core';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { DataTableComponent } from '../data-table/data-table.component';
import { Class } from '../../_interfaces/class';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-all-class',
  templateUrl: './all-class.component.html',
  styleUrl: './all-class.component.css',
  standalone: true,
  imports:[PreloaderComponent,HeaderMenuComponent,SidebarComponent,FooterComponent, DataTableComponent]
})
export class AllClassComponent {


  columnList = [
    { key: 'select', header: '' },
    { key: 'id', header: 'ID' },
    { key: 'photo', header: 'Photo' },
    { key: 'name', header: 'Name' },
    { key: 'gender', header: 'Gender' },
    { key: 'class', header: 'Class' },
    { key: 'section', header: 'Section' },
    { key: 'date', header: 'Date' },
    { key: 'time', header: 'Time' },
    { key: 'phone', header: 'Phone' },
    { key: 'email', header: 'E-mail' }
  ];
  
    classData: Class[] = [
    {
      id: '1',
      photo: 'assets/img/figure/student1.png',
      name: 'Alice Johnson',
      gender: 'Female',
      class: '10th',
      section: 'A',
      date: '2024-07-01',
      time: '09:00 AM',
      phone: '+1234567890',
      email: 'alice@example.com'
    },
    {
      id: '2',
      photo: 'assets/img/figure/student2.png',
      name: 'Bob Smith',
      gender: 'Male',
      class: '9th',
      section: 'B',
      date: '2024-07-02',
      time: '10:30 AM',
      phone: '+1987654321',
      email: 'bob@example.com'
    },
    {
      id: '3',
      photo: 'assets/img/figure/student3.png',
      name: 'Catherine Brown',
      gender: 'Female',
      class: '11th',
      section: 'C',
      date: '2024-07-03',
      time: '11:15 AM',
      phone: '+1122334455',
      email: 'catherine@example.com'
    },
    {
      id: '4',
      photo: 'assets/img/figure/student4.png',
      name: 'David Wilson',
      gender: 'Male',
      class: '12th',
      section: 'D',
      date: '2024-07-04',
      time: '12:00 PM',
      phone: '+1567890123',
      email: 'david@example.com'
    },
    {
      id: '5',
      photo: 'assets/img/figure/student5.png',
      name: 'Emily Davis',
      gender: 'Female',
      class: '8th',
      section: 'E',
      date: '2024-07-05',
      time: '01:45 PM',
      phone: '+1345678901',
      email: 'emily@example.com'
    },
    {
      id: '6',
      photo: 'assets/img/figure/student6.png',
      name: 'Frank Martinez',
      gender: 'Male',
      class: '9th',
      section: 'F',
      date: '2024-07-06',
      time: '02:30 PM',
      phone: '+1890123456',
      email: 'frank@example.com'
    },
    {
      id: '7',
      photo: 'assets/img/figure/student7.png',
      name: 'Grace Wilson',
      gender: 'Female',
      class: '10th',
      section: 'G',
      date: '2024-07-07',
      time: '03:15 PM',
      phone: '+1456789012',
      email: 'grace@example.com'
    },
    {
      id: '8',
      photo: 'assets/img/figure/student8.png',
      name: 'Henry Taylor',
      gender: 'Male',
      class: '11th',
      section: 'H',
      date: '2024-07-08',
      time: '04:00 PM',
      phone: '+1789012345',
      email: 'henry@example.com'
    },
    {
      id: '9',
      photo: 'assets/img/figure/student9.png',
      name: 'Isabella Garcia',
      gender: 'Female',
      class: '12th',
      section: 'I',
      date: '2024-07-09',
      time: '04:45 PM',
      phone: '+1678901234',
      email: 'isabella@example.com'
    },
    {
      id: '10',
      photo: 'assets/img/figure/student10.png',
      name: 'James Rodriguez',
      gender: 'Male',
      class: '8th',
      section: 'J',
      date: '2024-07-10',
      time: '05:30 PM',
      phone: '+1234567890',
      email: 'james@example.com'
    },
    {
      id: '11',
      photo: 'assets/img/figure/student11.png',
      name: 'Katherine Lee',
      gender: 'Female',
      class: '9th',
      section: 'K',
      date: '2024-07-11',
      time: '06:15 PM',
      phone: '+1987654321',
      email: 'katherine@example.com'
    },
    {
      id: '12',
      photo: 'assets/img/figure/student12.png',
      name: 'Liam Brown',
      gender: 'Male',
      class: '10th',
      section: 'L',
      date: '2024-07-12',
      time: '07:00 PM',
      phone: '+1122334455',
      email: 'liam@example.com'
    }
  ];
  

  data = new MatTableDataSource<Class>(this.classData);

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
