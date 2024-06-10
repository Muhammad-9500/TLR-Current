import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { TitleService } from './_services/title.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[TitleService]
})
export class AppComponent {
  title = this.titleService;
  constructor(private titleService: TitleService) { }
}
