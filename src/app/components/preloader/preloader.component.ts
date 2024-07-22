import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [],
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.css',
  host: {ngSkipHydration: 'true'},
})
export class PreloaderComponent implements AfterViewInit {
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.removePreloader();
  }

  removePreloader() {
    const preloader = this.el.nativeElement.querySelector('#preloader');
    if (preloader) {
      this.renderer.setStyle(preloader, 'transition', 'opacity 0.5s ease');
      this.renderer.setStyle(preloader, 'opacity', '0');
      setTimeout(() => {
        this.renderer.removeChild(this.el.nativeElement, preloader);
      }, 500);
    }
  }
}
