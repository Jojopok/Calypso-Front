import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SearchBarComponent} from "../../molecules/search-bar/search-bar.component";
import {DropdownListComponent} from "../../atoms/dropdown-list/dropdown-list.component";
import {CheckboxToggleComponent} from "../../atoms/checkbox-toggle/checkbox-toggle.component";

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
export class FilterBarComponent {
  @Input() categories: any[] = [];
  @Output() search = new EventEmitter<string>();
  @Output() categorySelect = new EventEmitter<string>();
  @Output() completedToggle = new EventEmitter<boolean>();

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
