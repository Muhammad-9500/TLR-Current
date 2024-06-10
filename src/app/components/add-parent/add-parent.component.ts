import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-add-parent',
  templateUrl: './add-parent.component.html',
  styleUrl: './add-parent.component.css',
  standalone:true,
  imports:[HeaderMenuComponent,SidebarComponent,FooterComponent]
})
export class AddParentComponent {

}
