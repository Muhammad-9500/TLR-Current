import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';

@Component({
  selector: 'app-all-fees',
  templateUrl: './all-fees.component.html',
  styleUrl: './all-fees.component.css',
  standalone: true,
  imports:[HeaderMenuComponent,SidebarComponent,FooterComponent]
})
export class AllFeesComponent {

}
