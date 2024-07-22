import { Component } from '@angular/core';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { SelectDropDownComponent } from '../select-drop-down/select-drop-down.component';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrl: './add-class.component.css',
  standalone:true,
  imports:[PreloaderComponent,HeaderMenuComponent,SidebarComponent,FooterComponent, DatepickerComponent, SelectDropDownComponent]
})
export class AddClassComponent {

  gender = [
    { value: 'Male' },
    { value: 'Female' },
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


  subjects = [
    { value: 'English' },
    { value: 'Mathematics' },
    { value: 'Chemistry' },
    { value: 'Physics' },
    { value: 'Biology' }
  ];
  

  
  selectedOptions: string[]=[];

  handleAllSelectionChange(value: string) {
    this.selectedOptions.forEach(elem =>{
      if(elem === value)
        return;
    });
    this.selectedOptions.push(value);

    console.log('Selected value:', this.selectedOptions);
  }

  

  selectedSubjectOption: string = '';

  handleSubjectSelectionChange(value: string) {
    this.selectedSubjectOption = value;
    console.log('Selected value:', this.selectedSubjectOption);
  }

  selectedSectionOption: string = '';
  handleSectionSelectionChange(value: string) {
    this.selectedSectionOption = value;
    console.log('Selected value:', this.selectedSectionOption);
  }

}
