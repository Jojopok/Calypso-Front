import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SearchBarComponent} from "../../molecules/search-bar/search-bar.component";
import {DropdownListComponent} from "../../atoms/dropdown-list/dropdown-list.component";
import {CheckboxToggleComponent} from "../../atoms/checkbox-toggle/checkbox-toggle.component";
import {query} from "@angular/animations";
import {TypeService} from "../../../services/type.service";
// @ts-ignore
import { Type } from '../../models/type'; // Import du modèle Type


@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [
    SearchBarComponent,
    DropdownListComponent,
    CheckboxToggleComponent
  ],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.scss'
})

  export class FilterBarComponent implements OnInit {
  categories: { name: string }[] = []; // ✅ Format attendu par DropdownListComponent
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
          name: type.type,
        }));

        console.log('Catégories récupérées après mapping:', this.categories);
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
    this.categorySelect.emit(value);
  }

  onCompletedToggle(isCompleted: boolean) {
    this.completedToggle.emit(isCompleted);
  }


}
