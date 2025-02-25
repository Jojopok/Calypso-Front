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
  onSelect(value: any): void {
    this.selectedValue = value;
    this.isOpen = false;  // Fermer la liste
    this.valueSelected.emit(value); // Émet la valeur sélectionnée vers le parent
  }
}
