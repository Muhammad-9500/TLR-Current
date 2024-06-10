import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-all-parents',
  templateUrl: './all-parents.component.html',
  styleUrl: './all-parents.component.css',
  standalone: true,
  imports:[HeaderMenuComponent,SidebarComponent,FooterComponent]
})
export class AllParentsComponent {

}
