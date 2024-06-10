import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css',],
  standalone: true,
  imports: [RouterModule,SidebarComponent,HeaderMenuComponent,FooterComponent]  
})
export class IndexComponent { }
