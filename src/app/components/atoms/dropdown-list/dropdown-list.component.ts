import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown-list.component.html',
  styleUrl: './dropdown-list.component.scss'
})
export class DropdownListComponent {
  @Input() options: any[] = [];
  @Input() selectedValue: string = '';
  @Input() placeholder: string = '';

  @Output() valueSelected = new EventEmitter<any>();

  isOpen: boolean = false;

  // Méthode appelée lorsqu'une option est sélectionnée
  onSelect(option: { name: string; value: string }): void {
    console.log('🔹 Option sélectionnée dans Dropdown:', option);
    this.selectedValue = option.name;
    this.isOpen = false;
    this.valueSelected.emit(option);
  }


}
