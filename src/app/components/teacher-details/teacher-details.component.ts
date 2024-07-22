import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { PreloaderComponent } from '../preloader/preloader.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrl: './teacher-details.component.css',
  standalone: true,
  imports:[PreloaderComponent,HeaderMenuComponent,SidebarComponent,FooterComponent]
})
export class TeacherDetailsComponent {

}
