import { Component } from '@angular/core';
import { PreloaderComponent } from '../preloader/preloader.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PreloaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
