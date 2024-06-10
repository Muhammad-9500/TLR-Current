import { Component } from '@angular/core';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-index5',
  standalone: true,
  imports: [HeaderMenuComponent,SidebarComponent,FooterComponent],
  templateUrl: './index5.component.html',
  styleUrl: './index5.component.css'
})
export class Index5Component {

}
