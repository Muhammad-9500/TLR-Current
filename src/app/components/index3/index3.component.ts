import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-index3',
  standalone: true,
  imports: [SidebarComponent,HeaderMenuComponent,FooterComponent],
  templateUrl: './index3.component.html',
  styleUrl: './index3.component.css'
})
export class Index3Component {

}
