import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { DataTableComponent } from '../data-table/data-table.component';
import { Teacher } from '../../_interfaces/teacher';
import { MatTableDataSource } from '@angular/material/table';

export const teacherData: Teacher[] = [
  {
    photo: 'assets/img/figure/student1.png',
    name: 'John Doe',
    gender: 'Male',
    class: '10th Grade',
    subject: 'Mathematics',
    section: 'A',
    address: '123 Main St, Anytown, USA',
    phone: '123-456-7890',
    email: 'john.doe@example.com'
  },
  {
    photo: 'assets/img/figure/student2.png',
    name: 'Jane Smith',
    gender: 'Female',
    class: '10th Grade',
    subject: 'Science',
    section: 'B',
    address: '456 Elm St, Othertown, USA',
    phone: '234-567-8901',
    email: 'jane.smith@example.com'
  },
  {
    photo: 'assets/img/figure/student3.png',
    name: 'Alice Johnson',
    gender: 'Female',
    class: '11th Grade',
    subject: 'English',
    section: 'A',
    address: '789 Oak St, Anothertown, USA',
    phone: '345-678-9012',
    email: 'alice.johnson@example.com'
  }
];


@Component({
  selector: 'app-all-teacher',
  templateUrl: './all-teacher.component.html',
  styleUrl: './all-teacher.component.css',
  standalone: true,
  imports:[PreloaderComponent,HeaderMenuComponent,SidebarComponent,FooterComponent, DataTableComponent]
})
export class AllTeacherComponent {
  columnList = [
    { key: 'photo', header: 'Photo' },
    { key: 'name', header: 'Name' },
    { key: 'gender', header: 'Gender' },
    { key: 'class', header: 'Class' },
    { key: 'subject', header: 'Subject' },
    { key: 'section', header: 'Section' },
    { key: 'address', header: 'Address' },
    { key: 'phone', header: 'Phone' },
    { key: 'email', header: 'E-mail' }
  ];

  data = new MatTableDataSource<Teacher>(teacherData);

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
