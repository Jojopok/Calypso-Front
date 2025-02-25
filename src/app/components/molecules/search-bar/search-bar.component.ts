import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputFieldComponent } from '../../atoms/input-field/input-field.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../atoms/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [InputFieldComponent, CommonModule, ButtonComponent, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>(); 

  searchQuery: string = '';  // Variable pour stocker la recherche
  placeholder: string = 'Rechercher...';
  buttonLabel: string = 'Rechercher';
  
  // Méthode qui est appelée lorsque le bouton de recherche est cliqué
  onSearch(): void {
    this.search.emit(this.searchQuery);
  }

  onInputChange(value: Event): void {
    this.searchQuery = (value.target as HTMLInputElement).value;
  }
}
