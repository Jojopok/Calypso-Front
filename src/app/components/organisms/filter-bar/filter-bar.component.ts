import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchBarComponent } from "../../molecules/search-bar/search-bar.component";
import { DropdownListComponent } from "../../atoms/dropdown-list/dropdown-list.component";
import { CheckboxToggleComponent } from "../../atoms/checkbox-toggle/checkbox-toggle.component";
import { Type } from "../../../models/type";
import { TypeService } from '../../../services/type.service';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [SearchBarComponent, DropdownListComponent, CheckboxToggleComponent],
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit{
  @Input() options: any[] = [];
  @Output() search = new EventEmitter<string>();
  @Output() selectionChange = new EventEmitter<any>();
  @Output() completedToggle = new EventEmitter<boolean>();
  categories: Type[] = [];
  categoriesNom: string[] = [];

  constructor(private typeService: TypeService) { }

  ngOnInit(): void {
    this.typeService.getTypes().subscribe(types => {
      this.categoriesNom = Array.from(new Set(types.map(type => type.type)));
      });
  }
  onSearch(query: string) {
    this.search.emit(query);
  }

  onCategorySelect(category: any) {
    this.selectionChange.emit(category.value);
  }

  onCompletedToggle(isCompleted: boolean) {
    this.completedToggle.emit(isCompleted);
  }
}
