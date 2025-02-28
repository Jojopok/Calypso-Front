import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchBarComponent } from "../../molecules/search-bar/search-bar.component";
import { DropdownListComponent } from "../../atoms/dropdown-list/dropdown-list.component";
import { CheckboxToggleComponent } from "../../atoms/checkbox-toggle/checkbox-toggle.component";
import { Type } from "../../../models/type";
import { TypeService } from '../../../services/type.service';
import {ButtonComponent} from "../../atoms/button/button.component";

@Component({
  selector: 'app-filter-bar',
  standalone: true,
    imports: [SearchBarComponent, DropdownListComponent, CheckboxToggleComponent, ButtonComponent],
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent{
  @Input() options: any[] = [];
  @Output() search = new EventEmitter<string>();
  @Output() selectionChange = new EventEmitter<any>();
  @Output() completedToggle = new EventEmitter<boolean>();

  onSearch(query: string) {
    this.search.emit(query);
  }

  onCategorySelect(category: any) {
    this.selectionChange.emit(category);
  }

  onCompletedToggle(isCompleted: boolean) {
    this.completedToggle.emit(isCompleted);
  }
}
