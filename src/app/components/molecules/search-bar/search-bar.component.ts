import {Component, EventEmitter, Input, Output} from '@angular/core';
import {InputFieldComponent} from "../../atoms/input-field/input-field.component";
import {ButtonComponent} from "../../atoms/button/button.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    InputFieldComponent,
    ButtonComponent,
    NgClass
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Input() placeholder: string = 'Rechercher...';
  @Input() buttonLabel: string = 'Rechercher';
  @Input() buttonClasses: string[] = []; // Ajout pour personnalisation dynamique
  @Output() search = new EventEmitter<string>();

  searchQuery: string = '';

  onSearch(event: string) {
    this.searchQuery = event;
  }

  onSearchClick() {
    this.search.emit(this.searchQuery);
  }
}
