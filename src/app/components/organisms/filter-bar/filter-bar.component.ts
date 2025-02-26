import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchBarComponent } from "../../molecules/search-bar/search-bar.component";
import { DropdownListComponent } from "../../atoms/dropdown-list/dropdown-list.component";
import { CheckboxToggleComponent } from "../../atoms/checkbox-toggle/checkbox-toggle.component";
import { Type } from "../../../models/type"; // ✅ Import du modèle Type

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [
    SearchBarComponent,
    DropdownListComponent,
    CheckboxToggleComponent
  ],
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent {
  @Input() categories: { name: string; value: string; color?: string; logo?: string }[] = []; // ✅ Les catégories viennent du parent

  @Output() search = new EventEmitter<string>();
  @Output() categorySelect = new EventEmitter<string>();
  @Output() completedToggle = new EventEmitter<boolean>();

  onSearch(query: string) {
    this.search.emit(query);
  }

  onCategorySelect(category: { name: string; value: string }) {
    console.log('✅ Catégorie envoyée à AlgoComponent:', category.value); // 🔎 Vérifie que c'est bien l'ID
    this.categorySelect.emit(category.value); // ✅ Envoie seulement `value`, pas tout l'objet
  }


  onCompletedToggle(isCompleted: boolean) {
    this.completedToggle.emit(isCompleted);
  }
}
