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
  @Input() options: any[] = [];         // Liste des options (peut être un tableau d'objets ou de chaînes)
  @Input() selectedValue: any = '';     // Valeur sélectionnée
  @Input() placeholder: string = '';    // Placeholder pour le select

  @Output() valueSelected = new EventEmitter<any>();  // Événement qui émet la valeur sélectionnée
  
  isOpen: boolean = false;  // État de l'ouverture de la liste (par défaut fermé)

  // Méthode appelée lorsqu'une option est sélectionnée
  onSelect(value: any): void {
    this.selectedValue = value;
    this.valueSelected.emit(value); // Émet la valeur sélectionnée vers le parent
    this.isOpen = false;  // Ferme la liste après la sélection
  }
}
