import { Component, OnInit } from '@angular/core';
import { FilterBarComponent } from "../../organisms/filter-bar/filter-bar.component";
import { AlgoGridComponent } from "../../organisms/algo-grid/algo-grid.component";
import { ButtonComponent } from "../../atoms/button/button.component";
import { AlgoService } from "../../../services/algo.service";
import { TypeService } from "../../../services/type.service";
import { Algo } from "../../../models/algo";
import { Type } from "../../../models/type";
import {AlgoCardComponent} from "../../molecules/algo-card/algo-card.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-algo',
  standalone: true,
  imports: [
    FilterBarComponent,
    ButtonComponent,
    AlgoCardComponent,
    NgForOf
  ],
  templateUrl: './algo.component.html',
  styleUrl: './algo.component.scss'
})
export class AlgoComponent implements OnInit {
  algos: Algo[] = [];
  filteredAlgos: Algo[] = [];
  categories: Type[] = [];
  searchQuery: string = '';
  selectedCategory: string | null = null;
  showCompleted: boolean = false;

  constructor(private algoService: AlgoService, private typeService: TypeService) {}

  ngOnInit() {
    this.loadAlgos();
  }

  loadAlgos(): void {
    this.algoService.getAlgos().subscribe(
      (algos: Algo[]) => {
        this.algos = algos;
        this.filteredAlgos = [...algos];
      },
      (error) => {
        console.error('Erreur lors de la récupération des algos:', error);
      }
    );
  }
  
  applyFilters(): void {
    let filtered = this.algos.filter(algo => {
      const matchesSearchQuery = this.searchQuery
        ? algo.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        : true;

      const matchesCategory = this.selectedCategory === "0" || !this.selectedCategory
        ? true
        : algo.typeIds.includes(Number(this.selectedCategory));

      const matchesCompletion = this.showCompleted ? algo.isVisible : true;

      return matchesSearchQuery && matchesCategory && matchesCompletion;
    });

    this.filteredAlgos = filtered;
  }

  handleSearch(query: string): void {
    this.searchQuery = query;
    this.applyFilters();
  }

  handleCategorySelect(categoryId: string): void {
    this.selectedCategory = categoryId ? categoryId : null;
    this.applyFilters();
  }

  handleCompletedToggle(isCompleted: boolean): void {
    this.showCompleted = isCompleted;
    this.applyFilters();
  }
}
