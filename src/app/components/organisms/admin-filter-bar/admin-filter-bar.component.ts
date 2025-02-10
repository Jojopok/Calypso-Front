import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchBarComponent } from '../../molecules/search-bar/search-bar.component';
import { CheckboxToggleComponent } from '../../atoms/checkbox-toggle/checkbox-toggle.component';
import { DropdownListComponent } from '../../atoms/dropdown-list/dropdown-list.component';
import { Promo } from '../../../models/promo';
import { PromoService } from '../../../services/promo.service';

@Component({
  selector: 'app-admin-filter-bar',
  standalone: true,
  imports: [SearchBarComponent, CheckboxToggleComponent, DropdownListComponent],
  templateUrl: './admin-filter-bar.component.html',
  styleUrl: './admin-filter-bar.component.scss'
})
export class AdminFilterBarComponent implements OnInit {
  @Output() searchChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() toggleChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() yearChanged: EventEmitter<any> = new EventEmitter<any>();

  searchQuery: string = '';
  promos: Promo[] = [];
  promoDates: number[] = [];
  promo!: Promo;

  constructor(private promoService: PromoService) { }

  ngOnInit(): void {
    this.promoService.getPromos().subscribe(promos => {
      this.promoDates = Array.from(new Set(promos.map(promo => promo.beginAt)));
      });
  }
 
  // Méthode appelée pour le toggle 'Admin'
  onAdminToggle(isChecked: boolean): void {
  this.toggleChanged.emit({ isChecked, filterType: 'admin' });
  }

  // Méthode appelée pour le toggle 'Editeur'
  onEditeurToggle(isChecked: boolean): void {
    this.toggleChanged.emit({ isChecked, filterType: 'editeur' });
  }

  // Méthode appelée pour le toggle 'Wilder'
  onWilderToggle(isChecked: boolean): void {
    this.toggleChanged.emit({ isChecked, filterType: 'wilder' });
  }

  onYearSelect(selectedYear: string) {
    this.yearChanged.emit(selectedYear);
  }

  // Méthode qui sera appelée lorsque le bouton de recherche est cliqué
  onSearch(query: string): void {
    this.searchQuery = query;  // Met à jour la recherche avec la nouvelle valeur
    this.searchChanged.emit({ type: 'search', value: this.searchQuery });  // Émet l'événement avec la valeur de recherche
  }
}
