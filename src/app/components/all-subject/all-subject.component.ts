import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Subject } from '../../_interfaces/subject';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableComponent } from '../data-table/data-table.component';
import { SelectDropDownComponent } from '../select-drop-down/select-drop-down.component';

export const subjectData: Subject[] = [
  {
    id: '#0021',
    subjectName: 'Accounting',
    subjectType: 'Mathematics',
    class: '4',
    date: '02/05/2001'
  },
  {
    id: '#0022',
    subjectName: 'Bangla',
    subjectType: 'Theory',
    class: '6',
    date: '02/05/2001'
  },
  {
    id: '#0023',
    subjectName: 'English',
    subjectType: 'Theory',
    class: '7',
    date: '02/05/2001'
  },
  {
    id: '#0024',
    subjectName: 'Arts',
    subjectType: 'Theory',
    class: '6',
    date: '02/05/2001'
  },
  {
    id: '#0025',
    subjectName: 'Finanace',
    subjectType: 'Theory',
    class: '6',
    date: '02/05/2001'
  },
  {
    id: '#0026',
    subjectName: 'Economics',
    subjectType: 'Theory',
    class: '6',
    date: '02/05/2001'
  },
  {
    id: '#0027',
    subjectName: 'English',
    subjectType: 'Theory',
    class: '6',
    date: '02/05/2001'
  },
  {
    id: '#0028',
    subjectName: 'Bangla',
    subjectType: 'Theory',
    class: '6',
    date: '02/05/2001'
  },
];

@Component({
  selector: 'app-all-subject',
  templateUrl: './all-subject.component.html',
  styleUrl: './all-subject.component.css',
  standalone: true,
  imports:[PreloaderComponent,HeaderMenuComponent,SidebarComponent,FooterComponent, DataTableComponent, SelectDropDownComponent]
})
export class AllSubjectComponent {

  subjects = [
    { value: 'English' },
    { value: 'Mathematics' },
    { value: 'Chemistry' },
    { value: 'Physics' },
    { value: 'Biology' }
  ];

  class = [
    { value: 'Play' },
    { value: 'Nursery' },
    { value: 'Two' },
    { value: 'Three' },
    { value: 'Four' },
    {value: 'Five'}
  ];

  codes = [
    { value: '00524' },
    { value: '00525' },
    { value: '00526' },
    { value: '00527' },
    { value: '00528' }
  ];

  columnList = [
    { key: 'select', header: '' },
    { key: 'id', header: 'ID' },
    { key: 'subjectName', header: 'Subject Name' },
    { key: 'subjectType', header: 'Subject Type' },
    { key: 'class', header: 'Class' },
    { key: 'date', header: 'Date' },
    // { key: 'actions', header: '' },
  ];

  data = new MatTableDataSource<Subject>(subjectData);

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

}
