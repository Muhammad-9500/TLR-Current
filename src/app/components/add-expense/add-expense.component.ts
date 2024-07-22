import { Component } from '@angular/core';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { SelectDropDownComponent } from '../select-drop-down/select-drop-down.component';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css',
  standalone:true,
  imports:[PreloaderComponent,HeaderMenuComponent,SidebarComponent,FooterComponent, DatepickerComponent, SelectDropDownComponent]
})
export class AddExpenseComponent {
  expenseType = [
    { value: 'Salary' },
    { value: 'Transport' },
    { value: 'Maintainance' },
    { value: 'Purchase' },
    { value: 'Utilities' }
  ];

 status = [
    { value: 'Paid' },
    { value: 'Due' },
    { value: 'Others' },
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
