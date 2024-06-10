import { Component } from '@angular/core';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-index4',
  standalone: true,
  imports: [HeaderMenuComponent,SidebarComponent,FooterComponent],
  templateUrl: './index4.component.html',
  styleUrl: './index4.component.css'
})
export class Index4Component {

}
