import { AfterViewInit, Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  
})
export class LayoutComponent {
  //animationSpeed = 300;

  constructor(private elementRef: ElementRef) { }

   currentSubMenu: string | null = null;


   toggleSubMenu(subMenu: string) {
    this.currentSubMenu = this.currentSubMenu === subMenu ? null : subMenu;
  }

  toggleSidebar() {
   this.elementRef.nativeElement.querySelector('#wrapper').classList.toggle('sidebar-collapsed');
  }

  //toggleSidebarMobile() {
  //  this.elementRef.nativeElement.querySelector('#wrapper').classList.toggle('sidebar-collapsed-mobile');
  //  if (this.elementRef.nativeElement.querySelector('#wrapper').classList.contains('sidebar-collapsed')) {
  //    this.elementRef.nativeElement.querySelector('#wrapper').classList.remove('sidebar-collapsed');
  //  }
  //}

  }
