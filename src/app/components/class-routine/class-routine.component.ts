import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CLassRoutine } from '../../_interfaces/class-routine';
import { MatTableDataSource } from '@angular/material/table';
import { DataTableComponent } from '../data-table/data-table.component';
import { SelectDropDownComponent } from '../select-drop-down/select-drop-down.component';

export const classRoutineData: CLassRoutine[] = [
  {
    day:'Monday',
    class: '10th Grade',
    subject: 'Mathematics',
    section: 'A',
    teacher: 'John Doe',
    time: '10:00 AM - 11:00 AM',
    date: '2024-07-18'
  },
  {
    day:'Monday',
    class: '10th Grade',
    subject: 'Science',
    section: 'B',
    teacher: 'Jane Smith',
    time: '11:00 AM - 12:00 PM',
    date: '2024-07-18'
  },
  {
    day:'Monday',
    class: '11th Grade',
    subject: 'English',
    section: 'A',
    teacher: 'Alice Johnson',
    time: '12:00 PM - 1:00 PM',
    date: '2024-07-18'
  }
];


@Component({
  selector: 'app-class-routine',
  templateUrl: './class-routine.component.html',
  styleUrl: './class-routine.component.css',
  standalone: true,
  imports:[PreloaderComponent,HeaderMenuComponent,SidebarComponent,FooterComponent,DataTableComponent, SelectDropDownComponent]
})
export class ClassRoutineComponent {

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
    { key: 'day', header: 'Day' },
    { key: 'class', header: 'Class' },
    { key: 'subject', header: 'Subject' },
    { key: 'section', header: 'Section' },
    { key: 'teacher', header: 'Teacher' },
    { key: 'time', header: 'Time' },
    { key: 'date', header: 'Date' }
  ];
  

  data = new MatTableDataSource<CLassRoutine>(classRoutineData);

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
