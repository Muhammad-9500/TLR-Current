import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatTableDataSource } from '@angular/material/table';
import { TeacherPayment } from '../../_interfaces/teacher-payment';
import { DataTableComponent } from '../data-table/data-table.component';

@Component({
  selector: 'app-teacher-payment',
  templateUrl: './teacher-payment.component.html',
  styleUrl: './teacher-payment.component.css',
  standalone: true,
  imports:[PreloaderComponent,HeaderMenuComponent,SidebarComponent,FooterComponent, DataTableComponent]
})
export class TeacherPaymentComponent {

  columnList = [
    { key: 'select', header: '' },
    { key: 'roll', header: 'Roll' },
    { key: 'photo', header: 'Photo' },
    { key: 'name', header: 'Name' },
    { key: 'gender', header: 'Gender' },
    { key: 'class', header: 'Class' },
    { key: 'subject', header: 'Subject' },
    { key: 'amount', header: 'Amount' },
    { key: 'status', header: 'Status' },
    { key: 'phone', header: 'Phone' },
    { key: 'email', header: 'E-mail' }
  ];


  PaymentData: TeacherPayment[] = [
    {
      roll: "#0021",
      photo: "assets/img/figure/student2.png",
      name: "Mark Willy",
      gender: "Male",
      class: "2",
      subject: "English",
      amount: "$2,0000.00",
      status: "Paid",
      phone: "+123 9988568",
      email: "kazifahim93@gmail.com"
    },
    {
      roll: "#0022",
      photo: "assets/img/figure/student2.png",
      name: "John Doe",
      gender: "Male",
      class: "3",
      subject: "Mathematics",
      amount: "$3,5000.00",
      status: "Paid",
      phone: "+123 9988568",
      email: "johndoe@example.com"
    },
    {
      roll: "#0023",
      photo: "assets/img/figure/student2.png",
      name: "Jane Smith",
      gender: "Female",
      class: "1",
      subject: "Science",
      amount: "$2,2000.00",
      status: "Paid",
      phone: "+123 9988568",
      email: "janesmith@example.com"
    },
    {
      roll: "#0024",
      photo: "assets/img/figure/student2.png",
      name: "Michael Brown",
      gender: "Male",
      class: "2",
      subject: "History",
      amount: "$1,8000.00",
      status: "Paid",
      phone: "+123 9988568",
      email: "michaelbrown@example.com"
    },
    {
      roll: "#0025",
      photo: "assets/img/figure/student2.png",
      name: "Emily Davis",
      gender: "Female",
      class: "3",
      subject: "Geography",
      amount: "$2,5000.00",
      status: "Paid",
      phone: "+123 9988568",
      email: "emilydavis@example.com"
    },
    {
      roll: "#0026",
      photo: "assets/img/figure/student2.png",
      name: "Daniel Wilson",
      gender: "Male",
      class: "1",
      subject: "Computer Science",
      amount: "$3,1000.00",
      status: "Paid",
      phone: "+123 9988568",
      email: "danielwilson@example.com"
    },
    {
      roll: "#0027",
      photo: "assets/img/figure/student2.png",
      name: "Sophia Garcia",
      gender: "Female",
      class: "2",
      subject: "Art",
      amount: "$2,7000.00",
      status: "Paid",
      phone: "+123 9988568",
      email: "sophiagarcia@example.com"
    },
    {
      roll: "#0028",
      photo: "assets/img/figure/student2.png",
      name: "William Martinez",
      gender: "Male",
      class: "3",
      subject: "Physics",
      amount: "$4,2000.00",
      status: "Paid",
      phone: "+123 9988568",
      email: "williammartinez@example.com"
    },
    {
      roll: "#0029",
      photo: "assets/img/figure/student2.png",
      name: "Olivia Lopez",
      gender: "Female",
      class: "1",
      subject: "Chemistry",
      amount: "$2,9000.00",
      status: "Paid",
      phone: "+123 9988568",
      email: "olivialopez@example.com"
    },
    {
      roll: "#0030",
      photo: "assets/img/figure/student2.png",
      name: "Alexander Adams",
      gender: "Male",
      class: "2",
      subject: "Biology",
      amount: "$3,3000.00",
      status: "Paid",
      phone: "+123 9988568",
      email: "alexanderadams@example.com"
    }
  ];
  

  data = new MatTableDataSource<TeacherPayment>(this.PaymentData);

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
