import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { SelectDropDownComponent } from '../select-drop-down/select-drop-down.component';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrl: './add-teacher.component.css',
  standalone:true,
  imports:[PreloaderComponent,HeaderMenuComponent,SidebarComponent,FooterComponent, DatepickerComponent, SelectDropDownComponent]
})
export class AddTeacherComponent {
  gender = [
    { value: 'Male' },
    { value: 'Female' },
    { value: 'Others' }
  ];

  bloodGroup = [
    { value: 'A+' },
    { value: 'A-' },
    { value: 'B+' },
    { value: 'B-' },
    { value: 'O+' },
    { value: 'O-' }
  ];

  religion = [
    { value: 'Islam' },
    { value: 'Christianity' },
    { value: 'Hinduism' },
    { value: 'Buddhism' },
    { value: 'Others' }
  ];

  class = [
    { value: 'Play' },
    { value: 'Nursery' },
    { value: 'Two' },
    { value: 'Three' },
    { value: 'Four' },
    {value: 'Five'}
  ];

  sections = [
    { value: 'Pink' },
    { value: 'Blue' },
    { value: 'Bird' },
    { value: 'Rose' },
    { value: 'Red' }
  ];

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
