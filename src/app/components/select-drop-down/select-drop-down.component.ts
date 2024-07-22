import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-drop-down',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select-drop-down.component.html',
  styleUrl: './select-drop-down.component.css'
})
export class SelectDropDownComponent {
  @Input() options: { value: string }[] = [];
  @Input() selectedValue: string = '';
  @Output() selectionChange: EventEmitter<string> = new EventEmitter<string>();

  onSelectionChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedValue = selectElement.value;
    this.selectionChange.emit(this.selectedValue);
  }
}
