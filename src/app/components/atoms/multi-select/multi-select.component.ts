import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.scss'
})
export class MultiSelectComponent {
  @Input() options: string[] = [];  // Liste des options à afficher
  @Input() selectedValue: string[] = [];  // Valeurs sélectionnées initiales
  @Input() placeholder: string = 'Select options';  // Texte du placeholder
  
  @Output() valueSelected = new EventEmitter<string[]>();  // Émet les valeurs sélectionnées

  isOpen: boolean = false;  // Contrôle l'ouverture/fermeture de la liste déroulante

  // Vérifie si une option est sélectionnée
  isSelected(option: string): boolean {
    return this.selectedValue.includes(option);
  }

  // Méthode appelée lorsqu'une option est sélectionnée/désélectionnée
  onSelect(option: string): void {
    if (this.isSelected(option)) {
      this.selectedValue = this.selectedValue.filter(item => item !== option);  // Désélectionner l'option
    } else {
      this.selectedValue.push(option);  // Ajouter l'option à la sélection
    }
console.log('selectedValue', this.selectedValue);
    this.valueSelected.emit(this.selectedValue);  // Émettre la sélection vers le parent
  }
}
