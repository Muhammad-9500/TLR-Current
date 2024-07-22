import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCheckAll]',
  standalone: true
})
export class CheckAllDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('click', ['$event.target'])
  onClick(target: HTMLInputElement) {
    const isChecked = target.checked;
    const checkboxes = this.elementRef.nativeElement.querySelectorAll('.checkAll');

    checkboxes.forEach((checkbox: HTMLInputElement) => {
      checkbox.checked = isChecked;
    });
  }
}
