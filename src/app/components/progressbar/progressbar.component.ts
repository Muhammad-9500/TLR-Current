import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.css',
  standalone: true,
  imports:[HeaderMenuComponent,SidebarComponent,FooterComponent]
})
export class ProgressbarComponent {

}
