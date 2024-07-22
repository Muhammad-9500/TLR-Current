import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as $ from 'jquery';
import { SidebarService } from '../../_services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})


export class SidebarComponent{

 currentSubMenu: string | null = null;

  constructor() {}

  toggleSubMenu(menu: string): void {
    if (this.currentSubMenu === menu) {
      this.currentSubMenu = null;
    } else {
      this.currentSubMenu = menu;
    }
  }

// isCollapsed = false;

// constructor(private sidebarService: SidebarService) { }

// ngOnInit() {
//   this.sidebarService.isCollapsed$.subscribe(
//     (isCollapsed) => {
//       this.isCollapsed = isCollapsed;
//     }
//   );
// }
}
