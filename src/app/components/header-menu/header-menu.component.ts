import { Component, ElementRef } from '@angular/core';
import { SidebarService } from '../../_services/sidebar.service';


@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.css'
})
export class HeaderMenuComponent {
  
  constructor(private elementRef: ElementRef){}

  toggleSidebar() {
    this.elementRef.nativeElement.querySelector('#wrapper').classList.toggle('sidebar-collapsed');
  }

 

}
