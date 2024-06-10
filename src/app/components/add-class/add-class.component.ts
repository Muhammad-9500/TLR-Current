import { Component } from '@angular/core';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrl: './add-class.component.css',
  standalone:true,
  imports:[HeaderMenuComponent,SidebarComponent,FooterComponent]
})
export class AddClassComponent {

}
