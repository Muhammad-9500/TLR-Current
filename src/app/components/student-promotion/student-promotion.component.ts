import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SelectDropDownComponent } from '../select-drop-down/select-drop-down.component';

@Component({
  selector: 'app-student-promotion',
  templateUrl: './student-promotion.component.html',
  styleUrl: './student-promotion.component.css',
  standalone: true,
  imports:[PreloaderComponent,HeaderMenuComponent,SidebarComponent,FooterComponent, SelectDropDownComponent]
})
export class StudentPromotionComponent {

  sessions = [
    { value: '2016/2017' },
    { value: '2017/2018' },
    { value: '2018/2019' },
    { value: '2019/2020' },
    { value: '2020/2021' }
  ];

  class = [
    { value: 'Play' },
    { value: 'Nursery' },
    { value: 'Two' },
    { value: 'Three' },
    { value: 'Four' },
    {value: 'Five'}
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
