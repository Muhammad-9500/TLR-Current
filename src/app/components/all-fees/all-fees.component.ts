import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { Fees } from '../../_interfaces/fees';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableComponent } from '../data-table/data-table.component';

@Component({
  selector: 'app-all-fees',
  templateUrl: './all-fees.component.html',
  styleUrl: './all-fees.component.css',
  standalone: true,
  imports:[PreloaderComponent,HeaderMenuComponent,SidebarComponent,FooterComponent, DataTableComponent]
})
export class AllFeesComponent {

  columnList = [
    { key: 'id', header: 'ID' },
    { key: 'photo', header: 'Photo' },
    { key: 'name', header: 'Name' },
    { key: 'gender', header: 'Gender' },
    { key: 'class', header: 'Class' },
    { key: 'section', header: 'Section' },
    { key: 'expense', header: 'Expense' },
    { key: 'amount', header: 'Amount' },
    { key: 'status', header: 'Status' },
    { key: 'phone', header: 'Phone' },
    { key: 'email', header: 'E-mail' }
  ];

  feesData: Fees[] = [
    {
      id: '1',
      photo: 'assets/img/figure/student1.png',
      name: 'Alice Johnson',
      gender: 'Female',
      class: '10th',
      section: 'A',
      expense: 'Tuition',
      amount: '$500',
      status: 'Paid',
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
      expense: 'Books',
      amount: '$150',
      status: 'Unpaid',
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
      expense: 'Lab Fees',
      amount: '$200',
      status: 'Paid',
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
      expense: 'Sports',
      amount: '$100',
      status: 'Unpaid',
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
      expense: 'Tuition',
      amount: '$500',
      status: 'Paid',
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
      expense: 'Books',
      amount: '$150',
      status: 'Unpaid',
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
      expense: 'Lab Fees',
      amount: '$200',
      status: 'Paid',
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
      expense: 'Sports',
      amount: '$100',
      status: 'Unpaid',
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
      expense: 'Tuition',
      amount: '$500',
      status: 'Paid',
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
      expense: 'Books',
      amount: '$150',
      status: 'Unpaid',
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
      expense: 'Lab Fees',
      amount: '$200',
      status: 'Paid',
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
      expense: 'Sports',
      amount: '$100',
      status: 'Unpaid',
      phone: '+1122334455',
      email: 'liam@example.com'
    },
    {
      id: '13',
      photo: 'assets/img/figure/student13.png',
      name: 'Liam Brown',
      gender: 'Male',
      class: '10th',
      section: 'L',
      expense: 'Sports',
      amount: '$100',
      status: 'Unpaid',
      phone: '+1122334455',
      email: 'liam@example.com'
    }
  ];
  
  data = new MatTableDataSource<Fees>(this.feesData);


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
