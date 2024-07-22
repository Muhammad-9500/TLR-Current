import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { SelectDropDownComponent } from '../select-drop-down/select-drop-down.component';

@Component({
  selector: 'app-admit-form',
  templateUrl: './admit-form.component.html',
  styleUrl: './admit-form.component.css',
  standalone:true,
  imports:[PreloaderComponent,HeaderMenuComponent,SidebarComponent,FooterComponent,DatepickerComponent, SelectDropDownComponent]
})
export class AdmitFormComponent {
  gender = [
    { value: 'Male' },
    { value: 'Female' },
    { value: 'Others' }
  ];

  religion = [
    { value: 'Islam' },
    { value: 'Christianity' },
    { value: 'Hinduism' },
    { value: 'Buddhism' },
    { value: 'Others' }
  ];

  userType = [
    { value: 'Super Admin' },
    { value: 'Admin' },
    { value: 'User' }
  ];
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


  bloodGroup = [
    { value: 'A+' },
    { value: 'A-' },
    { value: 'B+' },
    { value: 'B-' },
    { value: 'O+' },
    { value: 'O-' }
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
