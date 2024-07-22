import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatTableDataSource } from '@angular/material/table';
import { Parent } from '../../_interfaces/parent';
import { DataTableComponent } from '../data-table/data-table.component';

@Component({
  selector: 'app-all-parents',
  templateUrl: './all-parents.component.html',
  styleUrl: './all-parents.component.css',
  standalone: true,
  imports:[PreloaderComponent,HeaderMenuComponent,SidebarComponent,FooterComponent, DataTableComponent]
})
export class AllParentsComponent {

  columnList = [
    { key: 'select', header: '' },
    { key: 'id', header: 'ID' },
    { key: 'photo', header: 'Photo' },
    { key: 'name', header: 'Name' },
    { key: 'gender', header: 'Gender' },
    { key: 'occupation', header: 'Occupation' },
    { key: 'address', header: 'Address' },
    { key: 'phone', header: 'Phone' },
    { key: 'email', header: 'E-mail' },
    // { key: 'actions', header: '' },
  ];


  parentData: Parent[] = [
    {
      id: '#0021',
      photo: 'assets/img/figure/student2.png',
      name: 'Mark Willy',
      gender: 'Male',
      occupation: 'Businessman',
      address: 'TA-107 Newyork',
      phone: '+ 123 9988568',
      email: 'kazifahim93.gmail.com'
    },
    {
      id: '#0022',
      photo: 'assets/img/figure/student3.png',
      name: 'Jessia Rose',
      gender: 'Female',
      occupation: 'House Wife',
      address: '59 Australia, Sydney',
      phone: '+ 123 9988568',
      email: 'kazifahim93.gmail.com'
    },
    {
      id: '#0023',
      photo: 'assets/img/figure/student4.png',
      name: 'Mark Willy',
      gender: 'Male',
      occupation: 'Banker',
      address: 'TA-107 Newyork',
      phone: '+ 123 9988568',
      email: 'kazifahim93.gmail.com'
    },
    {
      id: '#0024',
      photo: 'assets/img/figure/student5.png',
      name: 'Jessia Rose',
      gender: 'Female',
      occupation: 'House Wife',
      address: '59 Australia, Sydney',
      phone: '+ 123 9988568',
      email: 'kazifahim93.gmail.com'
    },
    {
      id: '#0025',
      photo: 'assets/img/figure/student6.png',
      name: 'Mark Willy',
      gender: 'Male',
      occupation: 'Businessman',
      address: 'TA-107 Newyork',
      phone: '+ 123 9988568',
      email: 'kazifahim93.gmail.com'
    },
    {
      id: '#0026',
      photo: 'assets/img/figure/student7.png',
      name: 'Jessia Rose',
      gender: 'Female',
      occupation: 'Banker',
      address: '59 Australia, Sydney',
      phone: '+ 123 9988568',
      email: 'kazifahim93.gmail.com'
    },
    {
      id: '#0027',
      photo: 'assets/img/figure/student8.png',
      name: 'Mark Willy',
      gender: 'Male',
      occupation: 'Businessman',
      address: 'TA-107 Newyork',
      phone: '+ 123 9988568',
      email: 'kazifahim93.gmail.com'}
    ];

  data = new MatTableDataSource<Parent>(this.parentData);

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
