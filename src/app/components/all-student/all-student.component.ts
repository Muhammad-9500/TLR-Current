import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrl: './all-student.component.css',
  standalone: true,
  imports:[HeaderMenuComponent,SidebarComponent,FooterComponent]
})
export class AllStudentComponent {

}
