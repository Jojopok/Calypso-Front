import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { SearchBarComponent } from "../../molecules/search-bar/search-bar.component";
import { DropdownListComponent } from "../../atoms/dropdown-list/dropdown-list.component";
import { CheckboxToggleComponent } from "../../atoms/checkbox-toggle/checkbox-toggle.component";
import { TypeService } from "../../../services/type.service";
import { Type } from "../../../models/type"; // ✅ Import correct du modèle Type

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
export class FilterBarComponent implements OnInit {
  categories: { name: string; value: string; color?: string; logo?: string }[] = [];

  @Output() search = new EventEmitter<string>();
  @Output() categorySelect = new EventEmitter<string>();
  @Output() completedToggle = new EventEmitter<boolean>();

  constructor(private typeService: TypeService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.typeService.getTypes().subscribe(
      (types: Type[]) => {
        this.categories = types.map(type => ({
          name: type.type,  // ✅ Utilise `type` de la BDD
          value: type.id.toString(),  // 🔥 Convertit `id` en string
          color: type.color, // Optionnel
          logo: type.logo    // Optionnel
        }));

        console.log('Catégories après mapping:', this.categories); // Debug
      },
      (error) => {
        console.error('Erreur lors de la récupération des catégories:', error);
      }
    );
  }


  onSearch(query: string) {
    this.search.emit(query);
  }

  onCategorySelect(value: string) {
    console.log('Catégorie sélectionnée:', value);
    this.categorySelect.emit(value);
  }

  onCompletedToggle(isCompleted: boolean) {
    this.completedToggle.emit(isCompleted);
  }
}
