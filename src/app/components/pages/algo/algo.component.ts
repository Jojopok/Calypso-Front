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
    AlgoGridComponent,
    ButtonComponent,
    AlgoCardComponent,
    NgForOf
  ],
  templateUrl: './algo.component.html',
  styleUrls: ['./algo.component.scss']
})
export class AlgoComponent implements OnInit {
  algos: Algo[] = [];
  filteredAlgos: Algo[] = [];
  categories: { name: string; value: string; color?: string; logo?: string }[] = [];

  searchQuery: string = '';
  selectedCategory: string | null = null;
  showCompleted: boolean = false;

  constructor(private algoService: AlgoService, private typeService: TypeService) {}

  ngOnInit(): void {
    this.loadAlgos();
    this.loadCategories();
  }

  loadAlgos(): void {
    this.algoService.getAlgos().subscribe(
      (algos: Algo[]) => {
        console.log('Données reçues de l\'API:', algos);

        this.algos = algos;
        this.filteredAlgos = [...algos];
      },
      (error) => {
        console.error('Erreur lors de la récupération des algos:', error);
      }
    );
  }


  loadCategories(): void {
    this.typeService.getTypes().subscribe(
      (types: Type[]) => {
        this.categories = [
          { name: "Tous", value: "all", color: "#ffffff", logo: "" },
          ...types.map(type => ({
            name: type.type,
            value: type.id.toString(),
            color: type.color,
            logo: type.logo
          }))
        ];

        console.log('Catégories récupérées:', this.categories);
      },
      (error) => {
        console.error('Erreur lors de la récupération des catégories:', error);
      }
    );
  }

  applyFilters(): void {
    // Si aucun filtre n'est activé, afficher tous les algos
    if (!this.searchQuery && !this.selectedCategory && !this.showCompleted) {
      this.filteredAlgos = [...this.algos]; // 🔥 Cloner la liste complète
      return;
    }

    // Appliquer les filtres
    this.filteredAlgos = this.algos.filter(algo => {
      const matchesSearch = this.searchQuery
        ? algo.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        : true;

      const matchesCategory = this.selectedCategory === "all" || !this.selectedCategory
        ? true  // ✅ Affiche tous les algos si "Tous" est sélectionné
        : algo.typeIds.includes(Number(this.selectedCategory));



      const matchesCompletion = this.showCompleted ? algo.isVisible : true;

      return matchesSearch && matchesCategory && matchesCompletion;
    });

    console.log("🔍 Filtres appliqués:", {
      searchQuery: this.searchQuery,
      selectedCategory: this.selectedCategory,
      showCompleted: this.showCompleted
    });

    console.log("📌 Algorithmes filtrés:", this.filteredAlgos);
  }




  handleSearch(query: string): void {
    this.searchQuery = query;
    this.applyFilters();
  }

  handleCategorySelect(categoryId: string): void {
    console.log("✅ Catégorie sélectionnée:", categoryId);
    this.selectedCategory = categoryId ? categoryId : null;
    this.applyFilters();
  }



  handleCompletedToggle(isCompleted: boolean): void {
    this.showCompleted = isCompleted;
    this.applyFilters();
  }
}
