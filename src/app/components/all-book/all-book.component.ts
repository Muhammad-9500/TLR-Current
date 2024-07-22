import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Book } from '../../_interfaces/book';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableComponent } from '../data-table/data-table.component';

@Component({
  selector: 'app-all-book',
  templateUrl: './all-book.component.html',
  styleUrl: './all-book.component.css',
  standalone:true,
  imports:[PreloaderComponent,HeaderMenuComponent,SidebarComponent,FooterComponent, DataTableComponent]
})
export class AllBookComponent implements OnInit {
    columnList = [
      { key: 'select', header: '' },
    { key: 'id', header:'ID' },
    { key: 'bookName', header: 'Book Name' },
    { key: 'subject', header:'Subject'  },
    { key: 'writer', header: 'Writter' },
    { key: 'class', header:'Class'  },
    { key: 'published', header: 'Published' },
    { key: 'creatingDate', header:'Creating Date'  },
    // { key: 'actions', header:'Actions'  }
  ];


    bookData: Book[] = [
    {
      id: '1',
      bookName: 'Introduction to Programming',
      subject: 'Computer Science',
      writer: 'John Smith',
      class: 'Beginner',
      published: '2023',
      creatingDate: '2023-01-15'
    },
    {
      id: '2',
      bookName: 'Data Structures and Algorithms',
      subject: 'Computer Science',
      writer: 'Alice Brown',
      class: 'Intermediate',
      published: '2022',
      creatingDate: '2022-07-22'
    },
    {
      id: '3',
      bookName: 'History of World War II',
      subject: 'History',
      writer: 'Michael Johnson',
      class: 'Advanced',
      published: '2021',
      creatingDate: '2021-03-10'
    },
    // Add more books as needed
  ];
  
  data = new MatTableDataSource<Book>(this.bookData);

  ngOnInit() {console.log(this.data)}

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
